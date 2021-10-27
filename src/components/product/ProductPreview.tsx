// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectFade, Navigation } from "swiper";
SwiperCore.use([EffectFade, Navigation]);

interface Props {
  images: string[];
  title: string;
}

const ProductPreview = ({ images, title }: Props) => {
  return (
    <>
      <p>Post:{title}</p>
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
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} width={900} height={1250} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductPreview;
