import { AiOutlineShoppingCart,AiTwotoneStar } from "react-icons/ai";

import { BsHeart } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

import './CardProductStyle.scss'
import {
  Link,
  useParams,
  Outlet,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
const CardProduct = ({ dislayItems, item, notify, notifyFavotites }) => {
  const params = useParams();
  const navigate = useNavigate();
  
 //chuyen huong khi click vao tung san pham
  const hanldClickItem = (id) => {
    navigate(`${params.typeFoodID}/${id}`);
  };
  return (
    <div
      key={item.id}
      className={`shop-product ${dislayItems} col-md-4 col-xs-6`}
      
    >
      <div className="shop-product__img"
            onClick={()=>hanldClickItem(item.id)}
      >
        <img src={item.img} alt="image erro" />
        <div className="shop-product__rate">
            <span>
                <AiTwotoneStar />
            </span>
          <span className="rate-number">{item.rate}</span>
        </div>
      </div>
      <div className="shop-product__content">
        <div className="shop-product__name"
               onClick={()=>hanldClickItem(item.id)}
        >{item.name}</div>
        <p className="shop-product__decription">{item.dsc}</p>
        <div className="shop-product__row">
          <div className="row_location">
            <span className="location-icon">
              <IoLocationSharp />
            </span>
            <span className="location-name">{item.country}</span>
          </div>
          <div className="row_price"
             
          >
            <span>{`$${item.price}`}</span>
          </div>
        </div>
      </div>
      <div className="shop-product__btns">
        <div className="shop-product__btn"
          onClick={notifyFavotites}
        >
          <BsHeart />
        </div>
        <div className="shop-product__btn"
            onClick={notify}
        >
          <AiOutlineShoppingCart />
        </div>
      </div>
      <div className="shop-product__label"></div>
    </div>
  );
};

export default CardProduct;
