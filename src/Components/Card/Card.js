import "./Card.css";
import renderRating from "../../Constant/rating";
import Formatter from "../../Constant/formatter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

function Card({ item_name, image, price, rating, detail, home_card }) {
  return (
    <div className="card bg-gray-700 font-mono rounded-lg overflow-hidden relative">
      <img src={image} alt="buffalo" />
      <div className="card__btn w-full">
        <button className="btn-3 rounded-full bg-orange-400 text-white"><FavoriteIcon /></button>
        <button className="btn-3 rounded-full bg-orange-400 text-white "><AddShoppingCart /></button>
      </div>
      <div className="card__info p-4 pt-0">
        {!home_card ? (
          ""
        ) : (
          <div className="card_payment_rating flex items-center justify-between text-md mt-2">
            <p className="product__price">
              <strong className="text-orange-100 text-lg">
                {Formatter.format(price)}
              </strong>
            </p>
            <span className="rating text-orange-400 font-bold text-lg">
              {renderRating(rating)}
            </span>
          </div>
        )}
        <div className="card__heading font-mono text-md pl-0 p-5 text-orange-100 font-bold text-center">
          <h2>{item_name}</h2>
        </div>
        {home_card ? (
          ""
        ) : (
          <div className="detail font-mono text-gray-300">
            <p>{detail}</p>
          </div>
        )}
        <div className="card__order ">
          {home_card ? (
            ""
          ) : (
            <button className="btn bg-orange-400 text-md text-gray-800 px-6 py-1 rounded-lg my-5">
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
