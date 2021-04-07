import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import { Products } from "../../graphql/generated/graphql";

interface Props {
  product: Products;
}

const Post = ({ product }: Props) => {
  const router = useRouter();
  const { productId } = router.query;

  console.log(product)

  return (
    <Layout>
      <p>Post: {productId}</p>
      {/* <p>{product.title}</p> */}
    </Layout>
  );
};

export default Post;
