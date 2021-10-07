import Layout from "../layout/Layout";
import { Products } from "../../graphql/generated/graphql";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation } from "swiper";
SwiperCore.use([EffectFade, Navigation]);

interface Props {
  product: Products;
}

const ProductPage = ({ product }: Props) => {
  return (
    <Layout>
      <p>Post:{product.title}</p>
      <p>Uploaded by:{product?.user_id}</p>
      <Swiper
        autoHeight
        style={{ width: "750px" }}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation
        initialSlide={0}
        effect="fade"
      >
        {product.images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img} width={900} height={1250} objectFit="cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
};

export default ProductPage;
