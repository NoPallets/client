import Layout from "../layout/Layout";
import { Products } from "../../graphql/generated/graphql";
import ProductSlider from "./ProductSlider";
import ProductInfo from "./ProductInfo";

interface Props {
  product: Products;
}

const ProductPage = ({ product }: Props) => {
  return (
    <Layout>
      <div className="flex justify-center">
        <ProductSlider images={product.images} />
        <ProductInfo product={product} />
      </div>
    </Layout>
  );
};

export default ProductPage;
