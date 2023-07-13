import img from "../image/wedding.jpg";
import { Link } from "react-router-dom";
function Cartcomp2sub1() {
  return (
    <div className="Cartcomp2sub1">
      <div className="Cartcomp2sub1-section">
        <div className="sect1">
          <img src={img} alt="fsds" />
          <p>BlancaVeils</p>
        </div>
        <div>contact shop</div>
      </div>
      <div className="Cartcomp2sub1-section-section1">
        <div className="Cartcomp2sub1-sub">
          <img src={img} alt="" />
          <div className="Cartcomp2sub1-sub1">
            <h4>soft wedding veil</h4>
            <p>Length: Elbow 25"</p>
            <p>Primary color: Silk white/ Off white</p>
            <p>Presonalization: touch of red</p>
            <div className="select-quantity">
              <select>
                <option value="">1</option>
              </select>
              <Link className="select-quantity select-edit">Edit</Link>
            </div>
            <div className="save-for-later">
              <button>Save for later</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="Cartcomp2sub1-sub11">
            <h2>USD 50.00</h2>
            <p>(usd 25.00 each)</p>
            <div>
                17 sold in the past 24 hours
            </div>
        </div>
      </div>
    </div>
  );
}
export default Cartcomp2sub1;
