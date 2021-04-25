import Layout from "../layout/Layout";
import { useRouter } from "next/router";
import { Products } from "../../graphql/generated/graphql";

interface Props {
  product: Products;
}

const ProductPage = ({ product }: Props) => {
  return (
    <Layout>
      <p>Post:{product.title}</p>
    </Layout>
  );
};

export default ProductPage;
