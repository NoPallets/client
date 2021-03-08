import { gql } from "@apollo/client";

const AddProduct = gql`
  mutation AddProduct($title: String!, $url: String!) {
    insert_products(objects: { title: $title }) {
      id
    }
  }
`;

export default AddProduct;
