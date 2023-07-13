import { Link } from "react-router-dom";
import img from "../image/image1.jpeg"
function Footersect1() {
  const backgd ={
    backgroundImage : img
  }
  return (
    <div style={backgd} className="footer-sect-bg">
      <div className="footer-section1">
        <p className="what-is-etsy">What is Etsty?</p>
        <Link className="read">
          <p>Read a wonderefully weird story</p>
        </Link>
        <div className="footer-section1-grid">
          <div>
            <h3>A community doing good</h3>
            <p>
              Etsy is a global online marketplace, where people come together to
              make, sell, buy, and collect unique items. We’re also a community
              pushing for positive change for small businesses, people, and the
              planet. Here are some of the ways we’re making a positive impact,
              together.
            </p>
          </div>
          <div>
            <h3>Support independent creator</h3>
            <p>
              There’s no Etsy warehouse – just millions of people selling the
              things they love. We make the whole process easy, helping you
              connect directly with makers to find something extraordinary.
            </p>
          </div>
          <div>
            <h3>Peace of mind</h3>
            <p>
              Your privacy is the highest priority of our dedicated team. And if
              you ever need assistance, we are always ready to step in for
              support.
            </p>
          </div>
        </div>
        <div>
            <h3 className="have-a-question">Have a question? Well, we’ve got some answers.</h3>
            <button className="help-center">Go to Help Center</button>
        </div>
      </div>
    </div>
  );
}
export default Footersect1;
