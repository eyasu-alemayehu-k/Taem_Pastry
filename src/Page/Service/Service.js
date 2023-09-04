import "./Service.css";
import order from "../../Asset/icons/s1.png";
import delivery from "../../Asset/icons/s2.png";
import design from "../../Asset/icons/s3.png";

function Service() {
  return (
    <section id="service" className="service flex justify-center items-center">
      <div className="service__container text-gray-300">
        <div className="heading text-center text-white my-6">
          <h3 className="text-xl text-orange-400">Our Service</h3>
          <h1 className="text-3xl">WE PROVIDE BEST QUALITY CAKE'S?</h1>
        </div>
        <div className="service__content">
          <div className="order service__items">
            <img src={order} alt="" />
            <h2 className="text-xl pb-2 font-bold text-orange-400">Order</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              minima quia placeat ullam vitae voluptate? Delectus
              minima quia placeat ullam vitae voluptate?
            </p>
          </div>
          <div className="order service__items">
            <img src={design} alt="" />
            <h2 className="text-xl font-bold pb-2 text-orange-400">Custom Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              minima quia placeat ullam vitae voluptate? Delectus
              minima quia placeat ullam vitae voluptate?
            </p>
          </div>
          <div className="order service__items">
            <img src={delivery} alt="" />
            <h2 className="text-xl font-bold pb-2 text-orange-400">Delivery</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              minima quia placeat ullam vitae voluptate? Delectus
              minima quia placeat ullam vitae voluptate?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
