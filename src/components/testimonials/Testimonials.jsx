import React from "react";
import "./testimonials.css";
import testimonialNotYet from "../../assets/placeholder-testimonial.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: testimonialNotYet,
    name: "Item Client Name",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam fugit commodi obcaecati molestias cum dicta voluptate maxime incidunt dolores excepturi. Unde facilis dolores harum voluptas?",
  },
  {
    avatar: testimonialNotYet,
    name: "Item Client Name",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam fugit commodi obcaecati molestias cum dicta voluptate maxime incidunt dolores excepturi. Unde facilis dolores harum voluptas?",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Item Avatar Client" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
