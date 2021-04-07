import { gql } from "@apollo/client";

const GetProduct = gql`
  query GetProduct($id: uuid!) {
    products(where: { id: { _eq: $id } }) {
      description
      id
      price
      sold
      title
      date
      images
    }
  }
`;

export default GetProduct;
