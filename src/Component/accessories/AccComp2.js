import { useState } from "react";
// import img2 from "../image/pics2.jpg";
// import img3 from "../image/pics3.jpg";
// import img4 from "../image/pics4.jpg";
// import img5 from "../image/pics5.jpg";
// import img6 from "../image/pics6.jpg";
// import img7 from "../image/pics7.jpg";
// import img8 from "../image/pics8.jpg";
// import img9 from "../image/pics9.jpg";
// import img10 from "../image/pics10.jpg";
// import img11 from "../image/pics11.jpg";
// import img12 from "../image/pics12.jpg";
// import img13 from "../image/pics13.jpg";
// import img14 from "../image/pics14.jpg";
// import img15 from "../image/pics15.jpg";
// import img16 from "../image/pics16.jpg";
// import img17 from "../image/pics17.jpg";
// import img18 from "../image/pics18.jpg";
// import img19 from "../image/pics19.jpg";
// import img20 from "../image/pics20.jpg";
// import img21 from "../image/pics21.jpg";
// import img22 from "../image/pics22.jpg";
// import img23 from "../image/pics23.jpg";
// import img24 from "../image/pics24.jpg";
// import img26 from "../image/pics26.jpg";
import { AiFillStar } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function AccComp2() {
  const [array, setArray] = useState([
    // {
    //   id: 1,
    //   title: "Rorschach mask with REAL moving inkblots",
    //   img: img26,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 2,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img2,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 3,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img3,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 4,
    //   title:
    //     "ANUBIS Mask - Easy to make Egyptian mask - Make a Low-Poly paper mask",
    //   img: img4,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 5,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img5,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 6,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img6,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 7,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img7,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 8,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img8,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 9,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img9,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "",
    // },
    // {
    //   id: 10,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img10,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "",
    // },
    // {
    //   id: 11,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img11,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    // },
    // {
    //   id: 12,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img12,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "",
    // },
    // {
    //   id: 13,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img13,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "",
    // },
    // {
    //   id: 14,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img14,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 15,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img15,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 16,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img16,
    //   price: "",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 17,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img17,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 18,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img18,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 19,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img19,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 20,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img20,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 21,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img21,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 22,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img22,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 23,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img23,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
    // {
    //   id: 24,
    //   title:
    //     "Flowers dangle earrings,  colorful flowers earrings, vintage style",
    //   img: img24,
    //   price: "USD 24.00",
    //   strike: "USD 28.89",
    //   off: "30%",
    //   ratio: "4,456",
    //   ad: "Free shipping",
    // },
  ]);
  const [check, setCheck] = useState(true)
  useEffect(()=>{
    fetch("http://159.65.21.42:9000/products").then((res=>res.json())).then((data)=>{
      const filterdata = data.filter((p)=>{
        return p.category === "wedding"
      })
        setArray(filterdata);
      setCheck(false);
    })
  },[])
  return (
    <div className="Acc-section-2">
      <div className="Acc-section-2-sub1">
        <h2>Find something you love</h2>
        <div className="section-1">
          <div className="Acc-section-2-sub1-1">
            <button>
              <p>
                <GoSettings />
              </p>
              All Filters
            </button>
          </div>
          <div className="select">
            <select>
              <option value="">
                <span>Sort by:</span> Relevancy
              </option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      <div className="Acc-section-2-sub2">
       {check=== true? (<div>please wait....</div>):( array.map((data) => (
          <Link className="productlink" to={`/ProductPage/${data._id}`}>
            <div className="Acc-section-2-sub2-card" key={data._id}>
              <img src={"http://159.65.21.42:9000"+data.image} alt="gf" />
              <h3 className="card-spacing">{data.name}</h3>
              <div className="acc-section-2-sub2-star">
                <p className="card-spacing">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
                <span>(10,233)</span>
              </div>
              <div className="acc-section-2-sub2-price">
                <p className="card-spacing">USD {data.price}</p>
                <span className="strike-off">USD 129</span>
                <span>(10%)</span>
              </div>
              <div className="card-spacing-free-shipping">free shipping</div>
            </div>
          </Link>
        )))}
      </div>
    </div>
  );
}
export default AccComp2;
