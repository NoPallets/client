import { gql } from "@apollo/client";

const AddUser = gql`
  mutation AddUser($email: String!, $password: String!) {
    insert_users_one(object: { email: $email, password: $password }) {
      id
    }
  }
`;

export default AddUser;
