import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./SliderSection.css";

import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../../SectionTitle/SectionTitle";

const SliderSection = () => {
  return (
    <div>
        <SectionTitle heading={"Food Category"}></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/TrSXnf6/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/gDcW1hm/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/9NDsq04/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-3.png
"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/2nfZCd9/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-6.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/TrSXnf6/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/xC7T5XK/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/CspZCrq/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-4.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/2nfZCd9/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-6.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/M8T9Z35/I-will-do-promote-and-advertise-amazon-book-kindle-ebook-marketing-to-active-readers-5.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="text-center my-5">
        <div className="btn btn-primary fs-4">Order Now</div>
      </div>
    </div>
  );
};

export default SliderSection;
