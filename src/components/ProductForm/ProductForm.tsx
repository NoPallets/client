import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useState } from "react";

const INSERT_PRODUCT = gql`
  mutation insertProduct($price: numeric!, $description: String!) {
    insert_nopallets_product(
      objects: {
        price: $price
        id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10"
        description: $description
      }
    ) {
      affected_rows
    }
  }
`;

export const ProductForm = () => {
  const [updateProduct] = useMutation(INSERT_PRODUCT);

  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({ variables: { price: "123", description: "test2321" } });
  };
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <label>
        Price:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
