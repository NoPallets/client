import Image from "next/image";
import { Product } from "../../../graphql/generated/graphql";

interface Props {
  product: Product;
}

const PostCard = ({ product }: Props) => {
  return <Image src={product.s3_url} width={450} height={450} />;
};

export default PostCard;
