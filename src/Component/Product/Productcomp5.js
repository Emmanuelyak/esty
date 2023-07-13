import { useContext } from "react";
import love from "../image/love.svg";
import star from "../image/star2.svg";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { USerContext } from "../context/UserContext";
function Productcomp5({description, products }) {

const {cartNumber, setCartNumber, AddtoCart} = useContext(USerContext)
 const submitcart = ()=>{
  setCartNumber(...cartNumber, {products})
  localStorage.setItem('cart_for_etsy', JSON.stringify(cartNumber))
  
  console.log(cartNumber);
}
 console.log(cartNumber)
  return (
    <div className="product-page-sub-section5">
      <p className="cart">In 20+ carts</p>
      <h1>USD 25.00+</h1>
      <p className="local">Local taxes included (where applicable)</p>
      <p>Soft Wedding Veil</p>
      <p className="blanceveils">
        BlancaVeil
        <span>
          <img src={love} alt="gfdd" /> Follow
        </span>
      </p>
      <p className="starseller">
        <img src={star} alt="dfdf" /> <p className="Star">Star Seller</p>
        <p className="sales">
          <p className="one">51,419 sales</p>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </p>
      </p>
      <form>
        <div>
          <label htmlFor="">
            Length <span>*</span>
          </label>
          <select name="" id="">
            <option value="">Select your length</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            Primary color <span>*</span>
          </label>
          <select name="" id="">
            <option value="">Select a color</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            Add your personalization <span>*</span>
          </label>
          <p className="when-do-you">
            {description}🥰

            {/* When do you need your veil by? This veil will ship within 1-3 weeks.
            If you need your veil ASAP, please leave your need by date request
            below and upgrade your shipping to ensure a speedy delivery!  */}
          </p>
          <textarea></textarea>
        </div>
        
        <Link to="/Cart"><button onClick={()=>AddtoCart(products)}>Add to cart</button></Link>
      </form>
      <div className="consistently">
        <img src={star} alt="sss" />
        <p>
          <span>Star Seller.</span> This seller consistently earned 5-star
          reviews, shipped on time, and replied quickly to any messages they
          received.
        </p>
      </div>
    </div>
  );
}
export default Productcomp5;
