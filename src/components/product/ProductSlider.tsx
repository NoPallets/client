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
        width: "1000px",
        cursor: "pointer",
        margin: "0",
        // ["--swiper-navigation-color" as string]: "black",
        // ["--swiper-navigation-size" as string]: "22px",
        ["--swiper-pagination-color" as string]: "white",
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
          <Image
            src={img}
            width={1000}
            height={1250}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`/_next/image?url=${img}&w=16&q=1`}
            quality={90}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
