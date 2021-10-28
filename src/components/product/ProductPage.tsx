import Layout from "../layout/Layout";
import { Products } from "../../graphql/generated/graphql";
import ProductSlider from "./ProductSlider";
import ProductInfo from "./ProductInfo";
import { useRouter } from "next/router";

interface Props {
  product: Products;
}

const ProductPage = ({ product }: Props) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>;
  }
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
