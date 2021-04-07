import { gql } from "@apollo/client";

const AddProduct = gql`
  mutation AddProduct($title: String!, $price: numeric!, $images: jsonb!) {
    insert_products(
      objects: { title: $title, price: $price, images: $images }
    ) {
      returning {
        id
      }
    }
  }
`;

export default AddProduct;
