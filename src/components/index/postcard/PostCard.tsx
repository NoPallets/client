import Image from "next/image";
import Link from "next/link";
import { Products } from "../../../graphql/generated/graphql";

interface Props {
  product: Products;
}

const PostCard = ({ product }: Props) => {
  return (
    <div className="group relative">
      <span
        className={`hidden absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 text-center pointer-events-none group-hover:block`}
      >
        {product.title}
      </span>
      <div className="hover:opacity-30 cursor-pointer">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[0]}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${product.images[0]}&w=16&q=1`}
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
