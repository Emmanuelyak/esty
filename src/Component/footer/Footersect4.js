import image1 from "../image/E.svg"
import {AiFillFacebook,AiFillInstagram} from "react-icons/ai"
import {BsPinterest,BsTwitter, BsYoutube} from "react-icons/bs"
// import {CiTwitter} from "react-icons/ci"

function Footersect4() {
  return (
    <div className="footer-section-4">
      <div className="sub-footer-section-4">
        <div>
          <h3>Shop</h3>
          <ul>
            <li>Gift cards</li>
            <li>Sitemap</li>
            <li>Etsy blog</li>
            <li>Etsy United Kingdom</li>
            <li>Etsy Germany</li>
            <li>Etsy Canada</li>
          </ul>
        </div>
        <div>
          <h3>Sell</h3>
          <ul>
            <li>Sell on Etsy</li>
            <li>Teams</li>
            <li>Forums</li>
            <li>Affiliates & Creators</li>
          </ul>
        </div>
        <div>
          <h3>About</h3>
          <ul>
            <li>Etsy, Inc.</li>
            <li>Policies</li>
            <li>Investors</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Impact</li>
            <li>Legal imprint</li>
          </ul>
        </div>
        <div>
          <h3>Help</h3>
          <ul>
            <li>Help Center</li>
            <li>Privacy settings</li>
            <li>
                <button><img src={image1} alt="g" /> Download the Etsy App</button>
            </li>
            <li>
                <div>
                    <p><AiFillInstagram /></p>
                    <p><AiFillFacebook /></p>
                    <p><BsPinterest /></p>
                    <p><BsTwitter /></p>
                    <p><BsYoutube /></p>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footersect4;
