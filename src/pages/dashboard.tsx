import DashBoardPage from "../components/dashboard/DashBoardPage";
import { GetServerSideProps } from "next";
import { initializeApollo } from "../lib/apolloClient";
import { GetProductsByUser } from "../graphql/queries";
import {
  GetProductsByUserQuery,
  GetProductsByUserQueryVariables,
} from "../graphql/generated/graphql";

export default DashBoardPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<
    GetProductsByUserQuery,
    GetProductsByUserQueryVariables
  >({
    query: GetProductsByUser,
    variables: {
      user_id: "96c1ad8e-20f2-48e3-b891-130cf29ba85d",
    },
  });

  return {
    props: {
      products: data.products,
    },
  };
};
