import { gql } from "@apollo/client";

const GetProducts = gql`
  query GetProducts {
    products {
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

export default GetProducts;
