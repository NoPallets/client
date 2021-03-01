import { GetStaticProps } from "next";

import { initializeApollo } from "../lib/apolloClient";
import { GetAuthors } from "../graphql/queries";
import { GetAuthorsQuery } from "../graphql/generated/graphql";
import IndexPage from "../components/index/IndexPage";

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetAuthorsQuery>({
    query: GetAuthors,
  });

  return {
    props: {
      authors: data.author,
    },
    revalidate: 1,
  };
};
