import { gql } from "@apollo/client";

const GetProducts = gql`
  query GetProducts {
    products {
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

export default GetProducts;
