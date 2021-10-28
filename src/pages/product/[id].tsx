import ProductPage from "../../components/product/ProductPage";
import { initializeApollo } from "../../lib/apolloClient";
import { GetProduct, GetProducts } from "../../graphql/queries";
import {
  GetProductQuery,
  GetProductQueryVariables,
  GetProductsQuery,
} from "../../graphql/generated/graphql";
import { GetStaticProps, GetStaticPaths } from "next";

export default ProductPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<
    GetProductQuery,
    GetProductQueryVariables
  >({
    query: GetProduct,
    variables: {
      id: params.id,
    },
  });

  return {
    props: {
      product: data.products_by_pk,
    },
    revalidate: 1,
  };
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
    paths,
    fallback: true,
  };
};
