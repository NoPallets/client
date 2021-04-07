import Layout from "../../components/layout/Layout";
import { Products } from "../../graphql/generated/graphql";
import PostCard from "./postcard/PostCard";

interface Props {
  products: Products[];
}

const IndexPage = ({ products }: Props) => {
  return (
    <Layout title="No Pallets">
      <div className="mx-auto w-4/5 my-0 grid grid-cols-3 gap-4">
        {products.map((product) => (
          <PostCard product={product} key={product.id} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
