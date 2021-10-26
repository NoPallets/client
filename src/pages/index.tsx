import { GetStaticProps } from "next";
import { initializeApollo } from "../lib/apolloClient";
import { GetProducts } from "../graphql/queries";
import { GetProductsQuery } from "../graphql/generated/graphql";
import IndexPage from "../components/index/IndexPage";

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetProductsQuery>({
    query: GetProducts,
  });

  return {
    props: {
      products: data.products,
    },
    revalidate: 1,
  };
};
