import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useSession } from "next-auth/client";
import { AddProduct } from "../../graphql/mutations";
import {
  AddProductMutation,
  AddProductMutationVariables,
} from "../../graphql/generated/graphql";
import Layout from "../layout/Layout";
import ProductPreview from "../product/ProductPreview";

import styles from "./UploadPage.module.scss";
import { useUserId } from "../../lib/hooks/useUserId";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [coverImage, setCoverImage] = useState<File>(null);
  const [images, setImages] = useState([]);
  const userId = useUserId();
  const [session] = useSession();

  const [addProduct] = useMutation<
    AddProductMutation,
    AddProductMutationVariables
  >(AddProduct);

  const uploadPhoto = async () => {
    let promises = [];
    images.forEach((file) => {
      const uuid = uuidv4();
      const fileName = encodeURIComponent(uuid) + "." + file.type.split("/")[1];
      const promise = fetch(`/api/upload-url?file=${fileName}`);
      promises.push(promise);
    });

    const responses = await Promise.all(promises);

    let uploads = [];
    let urls = [];

    for (let i = 0; i < responses.length; i++) {
      const { url, fields } = await responses[i].json();
      urls.push(`https://d2r71m37jt0r0z.cloudfront.net/${fields.key}`);
      const file = images[i];
      const formData = new FormData();
      Object.entries<string | File>({ ...fields, file }).forEach(
        ([key, value]) => {
          formData.append(key, value);
        }
      );
      const upload = fetch(url, {
        method: "POST",
        body: formData,
      });
      uploads.push(upload);
    }

    const status = (await Promise.all(uploads)).every((x) => x.ok === true);

    if (status) {
      // Add ref to DB
      addProduct({
        variables: {
          title: title,
          price: price,
          images: [...urls],
          user_id: userId,
        },
      });
    } else {
      console.error("Upload failed.");
    }
  };
  if (session) {
    return (
      <Layout title="NoPallets - upload">
        <form>
          <label className={styles.label} htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            className={styles.input}
            style={{ border: "1px solid green" }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className={styles.label} htmlFor="price">
            Price
          </label>
          <input
            id="price"
            className={styles.input}
            style={{ border: "1px solid green" }}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <label className={styles.label} htmlFor="cover-image">
            Cover Image
          </label>
          <div className={styles.input}>
            <input
              id="cover-image"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => setCoverImage(e.target.files[0])}
            />
            {coverImage ? (
              <img
                src={window.URL.createObjectURL(coverImage)}
                width={250}
                height={250}
              />
            ) : null}
          </div>
          <label className={styles.label} htmlFor="cover-image">
            Gallery Images
          </label>
          <div className={styles.input}>
            <input
              onChange={(e) =>
                setImages([...images, ...Array.from(e.target.files)])
              }
              type="file"
              accept="image/png, image/jpeg"
              multiple
            />
            <div className="flex gap-5">
              {images.map((image) => {
                return (
                  <div>
                    <img
                      src={window.URL.createObjectURL(image)}
                      width={250}
                      height={250}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            style={{ border: "1px solid black" }}
            onClick={() => uploadPhoto()}
          >
            Submit
          </button>
        </form>
        Preview
        <ProductPreview
          title={title}
          images={images.map((image) => window.URL.createObjectURL(image))}
        />
      </Layout>
    );
  }
  return (
    <Layout title="Access Denied">
      <p>Access Denied</p>
    </Layout>
  );
};

export default Upload;
