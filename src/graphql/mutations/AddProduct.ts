import { gql } from "@apollo/client";

const AddProduct = gql`
  mutation AddProduct($title: String!, $images: jsonb!) {
    insert_products(objects: { title: $title, images: $images }) {
      returning {
        id
      }
    }
  }
`;

export default AddProduct;
