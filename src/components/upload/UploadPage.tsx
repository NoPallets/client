import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";
import { AddProduct, AddImage } from "../../graphql/mutations";
import {
  AddProductMutation,
  AddProductMutationVariables,
} from "../../graphql/generated/graphql";
import Layout from "../layout/Layout";

const Upload = () => {
  const [images, setImages] = useState([]);

  const [addProduct] = useMutation<
    AddProductMutation,
    AddProductMutationVariables
  >(AddProduct);

  const uploadPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);

    var promises = [];
    files.forEach((file) => {
      const uuid = uuidv4();
      const fileName = encodeURIComponent(uuid) + "." + file.type.split("/")[1];
      const promise = fetch(`/api/upload-url?file=${fileName}`);
      promises.push(promise);
    });

    const responses = await Promise.all(promises);

    var uploads = [];
    var urls = [];

    for (let i = 0; i < responses.length; i++) {
      const { url, fields } = await responses[i].json();
      urls.push(`https://d2jmaluif1rg1w.cloudfront.net/${fields.key}`);
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
          title: "newfile",
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
        <p>Title</p>
        <input type="text" style={{ border: "1px solid green" }} />
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
        <input />
      </form>
    </Layout>
  );
};

export default Upload;
