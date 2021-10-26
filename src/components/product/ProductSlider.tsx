import { Products } from "../../graphql/generated/graphql";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";

SwiperCore.use([EffectFade, Navigation, Pagination]);

interface Props {
  images: string[];
}

const ProductSlider = ({ images }: Props) => {
  return (
    <Swiper
      autoHeight
      style={{
        width: "750px",
        // ["--swiper-navigation-color" as string]: "black",
        // ["--swiper-navigation-size" as string]: "22px",
        ["--swiper-pagination-color" as string]: "white",
        cursor: "pointer",
      }}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      loop
      initialSlide={0}
      effect="fade"
      onClick={(e) => e.slideNext()}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Image src={img} width={900} height={1250} objectFit="cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
