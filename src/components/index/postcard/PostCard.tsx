import Image from "next/image";
import { Product } from "../../../graphql/generated/graphql";
import style from "./PostCard.module.css";

interface Props {
  product: Product;
}

const PostCard = ({ product }: Props) => {
  return (
    <div className={` ${style.postCard} relative`}>
      <span
        className={`${style.title} absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4`}
      >
        {product.title}
      </span>
      <Image
        src={product.s3_url}
        width={450}
        height={450}
        className="hover:opacity-30 cursor-pointer"
        objectFit="cover"
      />
    </div>
  );
};

export default PostCard;
