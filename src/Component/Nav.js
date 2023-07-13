import search from "./image/search.png";
import heart from "./image/heart.svg";
import cart from "./image/cart4.svg";
import arrowNext from "./image/chevron-right.svg";
import { Link } from "react-router-dom";
import Signin from "./sign/Signin";
import { HiArrowSmRight } from "react-icons/hi";
import { useContext } from "react";
import { USerContext } from "./context/UserContext";
import Register from "./sign/Register";
function Nav() {
  const {show, setShow, hide, cartNumber} = useContext(USerContext)
  return (
    <div>
      <nav>
        <div className="navigation">
          <Link className="logo" to="/"><div>Esty</div></Link>
          <div className="search">
            <input type="text" />
            <div className="search-img">
              <img src={search} alt="background-img" />
            </div>
          </div>
          <div className="signin">
            <p
              onClick={() => {
                setShow(true);
              }}>
             <h2> Sign in</h2>
            </p>
            <img className="heart" src={heart} alt="heart" />
            <div><img src={cart} alt="cart" />
            <div className="number-of-products">{cartNumber.length}</div>
            </div>
          </div>
        </div>
        <div className="sub-navigation">
          <ul>
            <li className="j-a list">
              <Link to="/Accesories" className="link">
                <p>Jewelry & Accessories</p>
              </Link>
              <div className="subjewelry">
                <div className="all-jewelry-and-acces0ries">
                  <ul className="jewelry_sub1">
                    <li className="accspan">
                      <div>
                        <h3>All Jewelry & Accessories</h3>
                      </div>
                    </li>
                    <li className="subacc">
                      <p>Accessories</p> <img src={arrowNext} alt="arrow" />
                    </li>
                    <li className="subacc">
                      <p>Bags & Purses</p>
                      <img src={arrowNext} alt="arrow" />
                    </li>
                    <li className="subacc">
                      <p>Necklaces</p>
                      <img src={arrowNext} alt="arrow" />
                    </li>
                    <li className="subacc">
                      <p>Rings</p>
                      <img src={arrowNext} alt="arrow" />
                    </li>
                    <li className="subacc">
                      <p>Earrings</p>
                      <img src={arrowNext} alt="arrow" />
                    </li>
                    <li className="subacc">
                      <p>Bracelet</p>
                      <img src={arrowNext} alt="arrow" />
                    </li>
                    <li className="subacc">
                      <p>Body Jewelry</p>
                      <img src={arrowNext} alt="arrow" />
                    </li>
                    <li className="all-jewelry-plus-arror">
                      <p>All Jewelry</p>
                      <p className="arrorleft">
                        <HiArrowSmRight />
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="the-second-section">
                  <ul>
                    <li>
                      <h2>Hats and Caps</h2>
                    </li>
                    <li className="hats">
                      <p>Basketball and Trucky Hats</p>
                    </li>
                    <li className="hats">Beanies and Winter Hats</li>
                    <li className="hats sunhats">Sun Hats</li>
                    <li>
                      <h2>Hair Accessories</h2>
                    </li>
                    <li className="hats">Headbands</li>
                    <li className="hats">Fasinators & Mini Hats</li>
                    <li className="hats">Barrettes and Clips</li>
                    <li className="hats">Ties & Elastics</li>
                    <li className="hats">Wreaths & Tiaras</li>
                  </ul>
                </div>
                <div className="the-second-section">
                  <ul>
                    <Link className="linkfornav">
                      <li>
                        <h2>Sunglasses & Eyewears</h2>
                      </li>
                    </Link>
                    <Link className="linkfornav">
                      <li>
                        <h2>Scarves & Wraps</h2>
                      </li>
                    </Link>
                    <Link className="linkfornav">
                      <li>
                        <h2>Belts & Suspenders</h2>
                      </li>
                    </Link >
                    <Link className="linkfornav">
                      <li>
                        <h2>Keychains & Lanyards</h2>
                      </li>
                    </Link >
                    <Link className="linkfornav">
                      <li>
                        <h2>Cusmetics & Toiletry bsgs</h2>
                      </li>
                    </Link>
                    <Link className="linkfornav">
                      <li>
                        <h2>GLoves & mittens</h2>
                      </li>
                    </Link>
                    <Link className="linkfornav">
                      <li>
                        <h2>Umbrellas & Rain Accessories</h2>
                      </li>
                    </Link>
                    <Link className="linkfornav">
                      <li>
                        <h2>Wallets & Money clips</h2>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </li>
            <li className="list">Clothing & Shoes</li>
            <li className="list">Home & Living</li>
            <li className="list">Wedding & Party</li>
            <li className="list">Toys & Entertainment</li>
            <li className="list">Art & Collectibles</li>
            <li className="list">Craft Supplies & Tools</li>
            <li className="list">Vintage</li>
          </ul>
        </div>
      </nav>
      {show ? <Signin /> : null}
      {hide?<Register/>:null}
      {/* {show? <Register/> : null} */}
    </div>
  );
}
export default Nav;
