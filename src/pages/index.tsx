import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";
import { GetStaticProps } from "next";
import Layout from "../components/layout/Layout";

const query = gql`
  query {
    author {
      id
      name
    }
  }
`;

const Index = (props) => {
  const { loading, error, data } = useQuery(query);

  return (
    <Layout title="No Pallets">
      <div>{data.author[0].name}</div>
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: query,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};
