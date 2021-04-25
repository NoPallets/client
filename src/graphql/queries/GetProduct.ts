import { gql } from "@apollo/client";

const GetProduct = gql`
  query GetProduct($id: uuid!) {
    products_by_pk(id: $id) {
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
