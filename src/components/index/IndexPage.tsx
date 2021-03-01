import Layout from "../../components/layout/Layout";
import { Author } from "../../graphql/generated/graphql";

interface Props {
  authors: Author[];
}

const IndexPage = ({ authors }: Props) => {
  console.log(authors);
  return (
    <Layout title="No Pallets">
      <div>{authors[0].name}</div>
    </Layout>
  );
};

export default IndexPage;
