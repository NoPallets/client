import { gql } from "@apollo/client";

const GetProducts = gql`
  query GetProducts {
    product {
      description
      id
      price
      s3_url
      sold
      title
      date
    }
  }
`;

export default GetProducts;
