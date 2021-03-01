import Layout from "../../components/layout/Layout";
import { Product } from "../../graphql/generated/graphql";
import PostCard from "./postcard/PostCard";

interface Props {
  products: Product[];
}

const IndexPage = ({ products }: Props) => {
  return (
    <Layout title="No Pallets">
      <div
        className="mx-auto my-0 grid grid-cols-3 gap-4"
        style={{ width: "1200px" }}
      >
        {products.map((product) => (
          <PostCard product={product} key={product.id} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
