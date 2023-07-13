import { useState, createContext, useEffect } from "react";

export const USerContext = createContext();
function UserProvider(props) {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [cartNumber, setCartNumber] = useState([]);
  const cartDatatolocalstorage = localStorage.getItem('cart_for_etsy');

  useEffect(() => {
    if (cartDatatolocalstorage) {
      setCartNumber(JSON.parse(cartDatatolocalstorage));
    
    }
  }, [cartDatatolocalstorage]);
  const AddtoCart =(product)=>{
    let cartDatas = [...cartNumber];
    let checkMydata = cartDatas.find((data)=>{
      return data._id === product._id;
    },);
    if(checkMydata){
      alert("already in cart")
      return;
    }
    alert("Product added to Cart")
    let newProduct = {...product, Qty:1, totalPrice: product.price}
    cartDatas.push(newProduct)
    setCartNumber(cartDatas)
    localStorage.setItem("cart_for_etsy",JSON.stringify(cartNumber))
  };

  return <USerContext.Provider
    value={{ show, setShow, hide, setHide, cartNumber, setCartNumber, AddtoCart }}>
    {props.children}
  </USerContext.Provider>;
}

export default UserProvider;
