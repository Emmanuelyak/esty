
import img1 from "../image/wed1.jpg";
import img2 from "../image/wed2.jpg";
import img3 from "../image/wed3.jpg";
import img4 from "../image/wed4.jpg";
import img5 from "../image/wed5.jpg";
import img6 from "../image/wedding.jpg";
import img7 from "../image/wedding2.jpg";
import img8 from "../image/wedding3.jpg";

function Productcomp1(){
    const firstArray =[
        {
          image: img1,
          id: 1,
        },
        {
          image: img2,
          id: 2,
        },
        {
          image: img3,
          id: 3,
        },
        {
          image: img4,
          id: 4,
        },
        {
          image: img5,
          id: 5,
        },
        {
          image: img6,
          id: 6,
        },
        {
          image: img7,
          id: 7,
        },
        {
          image: img8,
          id: 8,
        },
      ];
    return(
        <div className="product-page-sub-section1">
        {firstArray.map((data) => (
          <div>
            <img src={data.image} alt="" />
          </div>
        ))}
      </div>
    )
}
export default Productcomp1;