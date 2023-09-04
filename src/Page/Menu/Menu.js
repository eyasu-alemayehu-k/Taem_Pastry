import Card from "../../Components/Card/Card";
import { menu } from "../../Constant/menu";
import "./Menu.css";

function Menu() {
  return (
    <section id="menu" className="menu px-40">
      <div className="menu__container">
        <div className="heading text-center text-white my-6">
          <h3 className="text-xl text-orange-400">Our Menu</h3>
          <h1 className="text-3xl">TODAY'S SPECIALTY</h1>
        </div>
        <div className="menu__card w-full">
            {
                menu.map(({item_name, detail, image, price, rating}, index) => {
                    return (
                        <Card 
                        key={index}
                        item_name={item_name}
                        detail={detail}
                        image={image}
                        price={price}
                        rating={rating}
                        home_card
                        />
                    )
                })                
            }
        </div>
      </div>
    </section>
  );
}

export default Menu;
