import Image from "next/image";
import { Product } from "../../../graphql/generated/graphql";

interface Props {
  product: Product;
}

const PostCard = ({ product }: Props) => {
  return (
    <div className="w-96 h-96 relative">
      <Image src={product.s3_url} layout="fill" objectFit="cover" />
    </div>
  );
};

export default PostCard;
