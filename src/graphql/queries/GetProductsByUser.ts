import { gql } from "@apollo/client";

const GetProductsByUser = gql`
  query GetProductsByUser($user_id: uuid!) {
    products(where: { user_id: { _eq: $user_id } }) {
      id
      title
      price
      sold
      date
      description
      images
      cover_photo
    }
  }
`;

export default GetProductsByUser;
