import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, EffectFade, Autoplay } from 'swiper';

const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="swiper"
    >
      <SwiperSlide>
        <img src="assets/images/image1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/images/image2.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/images/image3.jpg" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
