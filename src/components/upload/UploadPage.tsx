import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";
import { AddProduct } from "../../graphql/mutations";
import {
  AddProductMutation,
  AddProductMutationVariables,
} from "../../graphql/generated/graphql";
import Layout from "../layout/Layout";

const Upload = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const [addProduct] = useMutation<
    AddProductMutation,
    AddProductMutationVariables
  >(AddProduct);

  const uploadPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);

    let promises = [];
    files.forEach((file) => {
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
      const file = files[i];
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
        },
      });
    } else {
      console.error("Upload failed.");
    }
  };

  return (
    <Layout title="NoPallets - upload">
      <form>
        <label>Title</label>
        <input
          type="text"
          style={{ border: "1px solid green" }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="input"> Price</label>
        <input
          style={{ border: "1px solid green" }}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <p>Upload a .png or .jpg image (max 1MB).</p>
        <input
          onChange={uploadPhoto}
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
      </form>
    </Layout>
  );
};

export default Upload;
