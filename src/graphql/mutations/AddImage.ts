import { gql } from "@apollo/client";

const AddImage = gql`
  mutation AddImage($s3_url: String!, $product_id: uuid!) {
    insert_images(objects: { s3_url: $s3_url, product_id: $product_id }) {
      affected_rows
    }
  }
`;

export default AddImage;
