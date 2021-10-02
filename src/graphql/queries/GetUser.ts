import { gql } from "@apollo/client";

const GetUser = gql`
  query MyQuery($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
      password
    }
  }
`;

export default GetUser;
