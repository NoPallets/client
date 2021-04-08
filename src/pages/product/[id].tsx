import Product from "../../components/product/IndexPage";
import { initializeApollo } from "../../lib/apolloClient";
import { GetProduct } from "../../graphql/queries";
import { GetProductQuery } from "../../graphql/generated/graphql";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetProductQuery>({
    query: GetProduct,
  });

  return {
    props: {
      product: data.products,
    },
    revalidate: 1,
  };
};

//ToDo Add getStaticPaths
export default Product;
