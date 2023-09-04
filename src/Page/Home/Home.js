import "./Home.css";
// Import Swiper React components
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Wedding from '../../Asset/wedding_banner.png'
import Birthday from '../../Asset/birthday.png'
import Special from '../../Asset/special.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    service: "Wedding Cake",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
    image: Wedding,
  },
  {
    service: "BirthDay",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
    image: Birthday,
  },
  {
    service: "Special Occasion's",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
    image: Special,
  },
];

function Home() {
  return (
    <div section="home" id="home">
      <Swiper
        className="home"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ service,detail, image }, index) => {
          return (
            <SwiperSlide key={index} className="home__slider">
              <div className="home__container flex w-full h-full font-mono">
                <div className="home_info flex-1 h-full w-full">
                  <div className="home__info text-white h-full w-full">
                    <div className="home_info_wrapper">
                      <h3 className="text-orange-200 text-2xl">
                        Our Special Services
                      </h3>
                      <h1 className="text-orange-500  text-7xl my-7 font-bold">
                       {service}
                      </h1>
                      <p className="text-gray-400 text-xl font-light ">
                        {detail}
                      </p>
                      <button className="btn bg-orange-400 font-bold text-md text-gray-800 px-6 py-2 rounded-lg my-5">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Home_banner flex-1 h-full w-full flex justify-center items-center">
                  <img className="Home__banner--img" src={image} alt="cake" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Home;
