import ProductPage from "../../components/product/ProductPage";
import { initializeApollo } from "../../lib/apolloClient";
import { GetProduct, GetProducts } from "../../graphql/queries";
import {
  GetProductQuery,
  GetProductQueryVariables,
  GetProductsQuery,
} from "../../graphql/generated/graphql";
import { GetStaticProps, GetStaticPaths } from "next";

import { useQuery } from "@apollo/client";

export default ProductPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
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
  } catch (e) {
    console.log(e);
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetProductsQuery>({
    query: GetProducts,
  });

  const paths = data.products.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths: [],
    fallback: true,
  };
};
