import { useState } from "react";
import image1 from "../image/image1.jpeg";
import image2 from "../image/image2.jpeg";
import image3 from "../image/image3.jpeg";
import image4 from "../image/image4.jpeg";
import image5 from "../image/image5.jpeg";
import { AiFillStar } from "react-icons/ai";

function Comp2() {
  const [sect1] = useState([
    {
      id: 1,
      name: "Dainty Name Necklace with Birth Flower, Personalized Name Necklace, Custom Gold Name Jewelry, Birthday Gift for Her, Bridesmaid Gift",
      price: "20.47",
      ratio: "14,841",
      image: image1,
    },
    {
      id: 2,
      name: "Pamper Gift Box, Relax, Pamper Hamper, For Her, Care Package, Letterbox, Mother’s Day, Birthday, Pick Me Up, Hug in a Box, Valentine’s Day,",
      price: "12.80",
      ratio: "10,90",
      image: image2,
    },
    {
      id: 3,
      name: "Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case",
      price: "8.99",
      ratio: "10,702",
      image: image3,
    },
    {
      id: 4,
      name: "Personalised Song Plaque With Stand, Any Photo / Song, Any Playlist, Photo and Music Gift, Music Prints",
      price: "24.08",
      ratio: "6,307",
      image: image5,
    },
    {
        id: 5,
        image: image4,
      name: "Heart Keychain Set - Made with Authentic LEGO® Bricks, Matching keychains, Gift Set for Couples, Best Friends - Very High Quality & DURABLE",
      price: "8.48",
      ratio: "14,586",
    },
  ]);

  return (
    <div className="comp2sec">
      <div className="section2">
        <h2>Popular gifts right now</h2>
        <div className="sub-section2">
         {
            sect1.map((data)=>(
                <div className="sub-section-div" key={data.id}>
                <div>
                  <img src={data.image} alt="ph" />
                </div>
                <h3>
                 {data.name}
                </h3>
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span>({data.ratio})</span>
                </p>
                <h4>
                  USD {data.price}
                  <span>
                    <strike>USD40.95</strike>
                  </span>{" "}
                  <span>(50% off)</span>
                </h4>
              </div>
            ))
         }
        </div>
      </div>
    </div>
  );
}
export default Comp2;
