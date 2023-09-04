import "./About.css";
import pic from "../../Asset/cake.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container text-center py-10 px-32 ">
        <div className="about_border">
          <div className="heading text-center text-white my-6">
            <h3 className="text-xl text-orange-400">About Us</h3>
            <h1 className="text-3xl">WHY CHOOSE US?</h1>
          </div>
          <div className="about__wrapper flex">
            <div className="about__image flex-1">
              <img
                className="flex justify-center items-center"
                src={pic}
                alt=""
              />
            </div>
            <div className="about__info flex-1 px-10 mt-32">
              <h2 className="text-gray-100 text-2xl mb-6">
                Best Cake In The Country
              </h2>
              <p className="text-gray-300 text-xl text-justify ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                error voluptate fuga quaerat magni nobis commodi quia dolorum.
                Deserunt praesentium quam quas consequuntur iure vero vel
                voluptatum veritatis animi laudantium. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Sapiente ex fugit tempore
                laudantium? Minima reiciendis, fuga provident voluptas labore
                totam pariatur similique error nihil est doloremque rem dolores
                ut maxime.
              </p>
              <div className="about__btn flex gap-7 justify-between items-center font-bold">
                <button className="btn-2 bg-transparent text-md text-gray-800 px-8 py-4 rounded-lg mt-6">
                  <LocalShippingIcon /> Fast Delivery
                </button>
                <button className="btn-2 bg-transparent text-md text-gray-800 px-8 py-4 rounded-lg mt-14">
                  <AttachMoneyIcon /> East Payment
                </button>
                <button className="btn-2 bg-transparent text-md text-gray-800 px-8 py-4 rounded-lg mt-24">
                  <HeadsetMicIcon /> 24/7 Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
