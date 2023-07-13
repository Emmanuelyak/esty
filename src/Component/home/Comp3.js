import { useState } from "react";
import image1 from "../image/image6.jpeg"
import image2 from "../image/image7.jpeg"
import image3 from "../image/image8.jpeg"
import image4 from "../image/image9.jpeg"
import image5 from "../image/image10.jpeg"
function Comp3(){
    const [ data] =useState([
        {
            id: 1,
            image: image1,
            title: "Shop our popular gift categories"
        },
        {
            id: 2,
            image: image2,
            title: "Gifts for him"
        },
        {
            id: 3,
            image: image3,
            title: "Gifts for her"
        },
        {
            id: 4,
            image: image4,
            title: "Personalized gift ideas"
        },
        {
            id: 5,
            image: image5,
            title: "Personalized gift ideas"
        },
    
    ])
    
    return(
        <div className="comp3">
            <h4>
            Shop our popular gift categories
            </h4>
            <div className="section3">
                {data.map((data)=>(
                    <div key={data.id}>
                    <img src={data.image} alt="" />
                    <h3>{data.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Comp3;