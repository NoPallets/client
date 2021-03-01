import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent } from "react";
import { AddProduct } from "../../graphql/mutations";
import {
  AddProductMutation,
  AddProductMutationVariables,
} from "../../graphql/generated/graphql";

const Upload = () => {
  const [addProduct] = useMutation<
    AddProductMutation,
    AddProductMutationVariables
  >(AddProduct);

  const uploadPhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const uuid = uuidv4();
    const fileName = encodeURIComponent(uuid) + "." + file.type.split("/")[1];

    const res = await fetch(`/api/upload-url?file=${fileName}`);
    const { url, fields } = await res.json();

    const formData = new FormData();

    Object.entries<string | File>({ ...fields, file }).forEach(
      ([key, value]) => {
        formData.append(key, value);
      }
    );

    const upload = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (upload.ok) {
      //Add ref to DB
      addProduct({
        variables: {
          title: "newfile",
          url: `https://nopallets-product-image.s3.eu-central-1.amazonaws.com/${fields.key}`,
        },
      });
    } else {
      console.error("Upload failed.");
    }
  };

  return (
    <>
      <p>Upload a .png or .jpg image (max 1MB).</p>
      <input
        onChange={uploadPhoto}
        type="file"
        accept="image/png, image/jpeg"
      />
    </>
  );
};

export default Upload;
