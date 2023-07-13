import { useState } from "react";
import img1 from "../image/img1.jpeg"
import img2 from "../image/img2.jpeg"
import img3 from "../image/img3.jpeg"
import img4 from "../image/img4.jpeg"
import img5 from "../image/img5.jpeg"
import img6 from "../image/img6.jpeg"
import img7 from "../image/img7.jpeg"
import img8 from "../image/img8.jpeg"
import { Link } from "react-router-dom";
function AccComp1() {
    const [array] = useState([
        {
            id : 1,
            img : img1,
            title : "Earrings"
        },
        {
            id : 2,
            img : img2,
            title : "Bracelets"
        },
        {
            id : 3,
            img : img3,
            title : "Rings"
        },
        {
            id : 4,
            img : img4,
            title : "Necklaces"
        },
        {
            id : 5,
            img : img5,
            title : "All Jewelry"
        },
        {
            id : 6,
            img : img6,
            title : "Bags & Purses"
        },
        {
            id : 7,
            img : img7,
            title : "Accessories"
        },
        {
            id : 8,
            img : img8,
            title : "Body Jewelry"
        },
    ])
  return (
    <div className="AccComp1-section">
      <div className="sub-section">
        <div className="sub-section-div-1">
          <h2>Jewelry & Accessories</h2>
          <p>
            Necklaces, bracelets, earrings, and rings to complete your look or
            wow them with a perfect gift
          </p>
          <p>
            All <span></span> Jewelry & Accessories ( 16,127,189 results, with
            Ads <span></span>)
          </p>
        </div>
        <div className="sub-section-div-2">
           {array.map((data)=>(
             <div key={data.img}> 
             <img src={data.img} alt="pg" />
             <Link className="title"><p>{data.title}</p></Link>
         </div>
           ))}
        </div>
      </div>
    </div>
  );
}
export default AccComp1;
