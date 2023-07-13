import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Productcomp1 from "./Productcomp1";
import Productcomp2 from "./Productcomp2";
import Productcomp3 from "./Productcomp3";
import Productcomp4 from "./Productcomp4";
import Productcomp5 from "./Productcomp5";
import Productcomp6 from "./Productcomp6";
function ProductPage() {
  const [myvalue, setMyvalue] = useState({});
  const { _id } = useParams();
  useEffect(() => {
    fetch("http://159.65.21.42:9000/product/" +_id)
      .then((resp) => resp.json())
      .then((data) => {
        setMyvalue(data);
      });
  }, [_id]);
  console.log(myvalue);
  return (
    <div>
      <div>
        <div className="product-page-section1">
          <Productcomp1 />
          <Productcomp2 />
          <Productcomp3 display={"http://159.65.21.42:9000" + myvalue.image} />
          <Productcomp4 />
          <Productcomp5 description={myvalue.description} products={myvalue} />
        </div>
        <Productcomp6 />
      </div>
    </div>
  );
}
export default ProductPage;
