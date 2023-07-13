import pics1 from "../image/pic1.jpg";
import pics2 from "../image/pic2.jpg";
import pics3 from "../image/pic3.jpg";
import pics4 from "../image/pic4.jpg";
import pics5 from "../image/pic5.jpg";
import pics6 from "../image/pic6.jpg";
function Comp1() {
  return (
    <div className="section1">
      <p className="find_things">
        Find things you'll love. Support independent sellers. Only on Etsy.
      </p>
      <div className="section1_pics">
        <div>
        
          <img src={pics1} alt="pics1" />
          <p>Personalized Gifts</p>
        </div>
        <div>
        
            <img src={pics2} alt="pics2" />
    
          <p>DIY Crafts</p>
        </div>
        <div>
        
            <img src={pics3} alt="pics3" />
           <p>For Kids & Babys</p>
          </div>
        <div>
          
            <img src={pics4} alt="pics4" />

          <p>Jewelry</p>
        </div>
        <div>
            <img src={pics5} alt="pics5" />
          <p>Wedding & Engagement</p>
        </div>
        <div>
         
            <img src={pics6} alt="pics6" />
          <p><p>On Sales</p></p>
        </div>
      </div>
    </div>
  );
}
export default Comp1;
