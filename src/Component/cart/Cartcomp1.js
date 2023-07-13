import hands from "../image/hands.svg"
import { Link } from "react-router-dom";
function Cartcomp1(){
return(
    <div>
        <div className="cartcomp1">
        <div className="items-in-cart">
        <span>3</span> items in your cart
        </div>
        <div>
            <h2>keep shopping</h2>
        </div>
    </div>
    <div className="cartcomp1-section1">
        <img src={hands} alt="ddd" />
        <p><span>Buy confidently</span> with Etsy's Purchase Protection program for buyers, get a full refund in the rare case your item doesn't arrive, arrives damaged, or isn't as described. <span><Link className="link">See eligibility</Link></span></p>
    </div>
    </div>
)
}
export default Cartcomp1;