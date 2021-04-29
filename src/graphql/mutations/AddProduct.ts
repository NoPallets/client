import { gql } from "@apollo/client";

// const AddProduct = gql`
//   mutation AddProduct($title: String!, $price: numeric!, $images: jsonb!) {
//     insert_products(
//       objects: { title: $title, price: $price, images: $images }
//     ) {
//       returning {
//         id
//       }
//     }
//   }
// `;
const AddProduct = gql`
  mutation AddProduct(
    $title: String!
    $price: numeric!
    $cover_photo: String
    $images: jsonb!
  ) {
    insert_products_one(
      object: {
        title: $title
        price: $price
        cover_photo: $cover_photo
        images: $images
      }
    ) {
      id
    }
  }
`;

export default AddProduct;
