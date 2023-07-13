import Cartcomp2sub1 from "./Cartcomp2sub1";

import tag from "../image/tag.svg";
import Cartcomp2sub2 from "./Cartcompsub2";
function Cartcomp2() {
  return (
    <div className="cartComp2">
      <div className="cartComp2sub1">
        <Cartcomp2sub1 />
        <Cartcomp2sub1 />
        <div className="checkbox-area">
          <div>
            {" "}
            <input type="checkbox"></input> This order is a gift
            <p>Prices will not be shown on the package slip</p>
            <button>
              <span>+</span> Add a note to BlancaVeils{" "}
            </button>
          </div>
          <div className="doc-tag">
            <div className="tag">
              <img src={tag} alt="cd" />
              <p>Apply shop coupon codes</p>
            </div>
            <div className="select">
              <select name="" id="">
                <option value="">USD 32.73 (Standard International)</option>
              </select>
              <div>
              <p>Ready to ship in 1–3 weeks</p>
              <p>from United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cartcomp2sub2 />
    </div>
  );
}
export default Cartcomp2;
