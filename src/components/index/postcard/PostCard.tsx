import Image from "next/image";
import { Product } from "../../../graphql/generated/graphql";
import styles from "./PostCard.module.css";

interface Props {
  product: Product;
}

const PostCard = ({ product }: Props) => {
  return (
    <div className={`${styles.postCard} relative`}>
      <span
        className={`${styles.title} absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4`}
      >
        {product.title}
      </span>
      <div className="hover:opacity-30 cursor-pointer">
        <Image
          src={product.s3_url}
          width={450}
          height={450}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default PostCard;
