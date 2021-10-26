import { gql } from "@apollo/client";

const AddProduct = gql`
  mutation AddProduct(
    $title: String!
    $price: numeric!
    $cover_photo: String
    $images: jsonb!
    $user_id: uuid!
  ) {
    insert_products_one(
      object: {
        title: $title
        price: $price
        cover_photo: $cover_photo
        images: $images
        user_id: $user_id
      }
    ) {
      id
    }
  }
`;

export default AddProduct;
