import Layout from "../layout/Layout";
import { Products } from "../../graphql/generated/graphql";
import ProductSlider from "./ProductSlider";
interface Props {
  product: Products;
}

const ProductPage = ({ product }: Props) => {
  return (
    <Layout>
      <p>Post:{product.title}</p>
      <p>Uploaded by:{product?.user_id}</p>
      <ProductSlider images={product.images} />
    </Layout>
  );
};

export default ProductPage;
