import ProductPage from "../../components/product/ProductPage";
import { initializeApollo } from "../../lib/apolloClient";
import { GetProduct } from "../../graphql/queries";
import {
  GetProductQuery,
  GetProductQueryVariables,
} from "../../graphql/generated/graphql";
import { GetServerSideProps } from "next";

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<
    GetProductQuery,
    GetProductQueryVariables
  >({ query: GetProduct, variables: { id: params.id } });

  return {
    props: {
      product: data.products_by_pk,
    },
  };
};
