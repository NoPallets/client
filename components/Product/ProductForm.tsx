import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ADD_TODO = gql`
  mutation ADD_PRODUCT(
    $title: String!
    $description: String
    $price: Int
    $user: String
  ) {
    insert_products(
      objects: {
        description: $description
        price: $price
        title: $title
        user: $user
      }
    ) {
      affected_rows
    }
  }
`;

const ProductForm = () => {
  const [productInput, setProductInput] = useState({
    title: "",
    price: "",
    description: "description me",
    user: "auth0|0123456789",
  });

  const [addProduct] = useMutation(ADD_TODO);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addProduct({ variables: { ...productInput } });
      }}
    >
      <label htmlFor="title"></label>
      <input
        type="text"
        name="title"
        value={productInput.title}
        onChange={(e) =>
          setProductInput({ ...productInput, title: e.target.value })
        }
      />
      <label htmlFor="price"></label>
      <input
        type="text"
        name="price"
        value={productInput.price}
        onChange={(e) =>
          setProductInput({ ...productInput, price: e.target.value })
        }
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
export default ProductForm;
