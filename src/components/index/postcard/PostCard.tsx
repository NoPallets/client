import Image from "next/image";
import Link from "next/link";
import { Products } from "../../../graphql/generated/graphql";
import styles from "./PostCard.module.css";

interface Props {
  product: Products;
}

const PostCard = ({ product }: Props) => {
  return (
    <div className={`${styles.postCard} relative`}>
      <span
        className={`${styles.title} absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 text-center pointer-events-none`}
      >
        {product.title}
      </span>
      <div className="hover:opacity-30 cursor-pointer">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[0]}
            width={450}
            height={450}
            objectFit="cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
