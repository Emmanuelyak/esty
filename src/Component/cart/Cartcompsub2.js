import img from "../image/visa.png";
import img1 from "../image/mastercard.jpg";
import img2 from "../image/american.jpg";
import img3 from "../image/diners.jpg";
import img4 from "../image/paypal.jpg";
import img5 from "../image/googlepay.jpg";
import img6 from "../image/2.svg";
function Cartcomp2sub2() {
  return (
    <div className="cartcomp2sub2">
      <h2>How you'll pay</h2>
      <div className="cartcomp2sub2-input">
        <div className="radio-1">
          <input type="radio" name="home" id="1" />
          <div>
            <img src={img} alt="dfss" />
            <img src={img1} alt="dfss" />
            <img src={img2} alt="dfss" />
            <img src={img3} alt="dfss" />
          </div>
        </div>
        <div className="radio-1">
          <input type="radio" name="home" id="1" />
          <div>
            <img src={img4} alt="dfss" />
          </div>
        </div>
        <div className="radio-1">
          <input type="radio" name="home" id="1" />
          <div>
            <img src={img5} alt="dfss" />
          </div>
        </div>
      </div>
      <div className="shipping-items">
        <p>Item(s) total</p>
        <p>USD 100.00</p>
      </div>
      <div className="shipping-items1">
        <div>
          <p>Shipping</p>
          <h6>(To Nigeria)</h6>
        </div>
        <p>USD 32.73</p>
      </div>

      <div className="total-price">
        <h3>Total (3 items)</h3>
        <h3>USD 132.73</h3>
      </div>
      <div className="proceed-to-checkout">
        <button>Proceed to checkout</button>
      </div>
      <div className="apply-etsy-coupon">
        <div className="tagimg">
          <img src={img6} alt="dsd" />
        </div>
        Apply Etsy coupon code
      </div>
      <div>
        <p className="local-taxes">
          Local taxes included (where applicable){" "}
          <p>* Additional duties and taxes may apply</p>
        </p>
      </div>
    </div>
  );
}
export default Cartcomp2sub2;
