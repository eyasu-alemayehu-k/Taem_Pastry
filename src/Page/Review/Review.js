import React from "react";
import "./Review.css";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar:
      "https://pps.whatsapp.net/v/t61.24694-24/173176348_655556755833499_7306394762646390854_n.jpg?ccb=11-4&oh=01_AdR8rNincsmwvUaU-IAv4Ytx8JjWSe5Dmi8v4LPZRv5HDg&oe=64FAE1F0&_nc_cat=111",
    name: "Marew",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, laudantium. Consequuntur eaque.",
  },
  {
    avatar:
      "https://pps.whatsapp.net/v/t61.24694-24/350440879_597606262194057_3171231735805713625_n.jpg?ccb=11-4&oh=01_AdQrADw37T9GuH8OcTRYNvRifZTuxiGgfTwENOK3wo3qww&oe=64FF2A16&_nc_cat=111",
    name: "Hewan",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, laudantium. Consequuntur eaque, laboriosam minima aut accusamus est quaerat illum optio nostrum ab, eum perspiciatis praesentium earum.?",
  },
  {
    avatar:
      "https://pps.whatsapp.net/v/t61.24694-24/365471466_815414423444223_7657172186836130661_n.jpg?ccb=11-4&oh=01_AdRX1PKkOcRVSqwzYcXpIbaae5bFFeD_pARSBDuaL-Yiyw&oe=64FF3644&_nc_cat=101",
    name: "Betty",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, laudantium. Consequuntur eaque, laboriosam .",
  },
  {
    avatar:
      "https://pps.whatsapp.net/v/t61.24694-24/351435490_624982192926805_2003561943059184084_n.jpg?ccb=11-4&oh=01_AdT3KnTPrY3brHeR9zd_LUFPLeoM1t0FGj1-PSE-O5FUZA&oe=64FB0638&_nc_cat=102",
    name: "Daniel",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, laudantium. Consequuntur eaque, laboriosam minima aut accusamus est quaerat illum optio nostrum ab, eum perspiciatis praesentium earum.?",
  },
  {
    avatar:
      "https://pps.whatsapp.net/v/t61.24694-24/214341586_1005562443176710_4696181750120906943_n.jpg?ccb=11-4&oh=01_AdR-a2cgtzzkzVb4EBqvEmad2S0QGUwoQzRGoL62sghP4w&oe=64FF1DE9&_nc_cat=110",
    name: "Aschu",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

// https://swiperjs.com/demos#pagination-dynamic

const Review = () => {
  return (
    <section id="review" className="review text-white ">
      <div className="heading text-center text-white my-6">
        <h3 className="text-xl text-orange-400">Our Reviews</h3>
        <h1 className="text-3xl">WHAT PEOPLE SAY ABOUT US?</h1>
      </div>
      <Swiper
        className="container review__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="review__slider bg-gray-700">
              <div className="coworker-avatar">
                <img src={avatar} alt="Coworker" />
              </div>
              <h5 className="coworker__name text-center">{name}</h5>
              <small className="coworker__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Review;
