import { gql } from "@apollo/client";

const GetAuthors = gql`
  query GetAuthors {
    author {
      id
      name
    }
  }
`;

export default GetAuthors;
