import { gql } from "@apollo/client";

const AddProduct = gql`
  mutation AddProduct($title: String!, $url: String!) {
    insert_product(objects: { title: $title, s3_url: $url }) {
      affected_rows
    }
  }
`;

export default AddProduct;
