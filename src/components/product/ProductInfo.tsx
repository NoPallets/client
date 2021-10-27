import { Products } from "../../graphql/generated/graphql";

interface Props {
  product: Products;
}

const ProductInfo = ({ product }: Props) => {
  console.log(product);
  return (
    <div className="ml-12">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <div className="my-5 text-lg">{product.description}</div>
      {product.price && <div className="my-5 text-lg">€{product.price}</div>}
      <button className="border-black border px-16 py-0.5 text-lg hover:bg-black hover:text-white transition duration-300">
        INQUIRE
      </button>
    </div>
  );
};

export default ProductInfo;
