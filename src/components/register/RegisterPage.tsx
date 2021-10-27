import { useState } from "react";
import { hash } from "bcryptjs";
import { AddUser } from "../../graphql/mutations";
import {
  AddUserMutation,
  AddUserMutationVariables,
} from "../../graphql/generated/graphql";
import { useMutation } from "@apollo/client";

const RegisterPage = () => {
  const [addUser] = useMutation<AddUserMutation, AddUserMutationVariables>(
    AddUser
  );

  const registerUser = async (email, password) => {
    const hashedPassword = await hash(password, 10);
    await addUser({
      variables: {
        email,
        password: hashedPassword,
      },
    });
  };

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div className="provider">
      <label htmlFor="input-email">Email: </label>
      <input
        type="text"
        id="input-email"
        name="email"
        placeholder="mymail@mail.bg"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label htmlFor="input-password">Password: </label>
      <input
        type="password"
        id="input-password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={() => registerUser(email, password)}> Register</button>
    </div>
  );
};

export default RegisterPage;
