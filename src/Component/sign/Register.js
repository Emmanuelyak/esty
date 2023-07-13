import { useContext, useState } from "react";
import { USerContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import img from "../image/google.jpeg";
import img2 from "../image/facebook.png";
import img3 from "../image/apple.png";
import axios from "axios";
import Signin from "./Signin";
function Register() {
  const { setShow, setHide } = useContext(USerContext);
  const [registerUser, setRegisterUser] = useState({
    name:"",
    email: "",
    password: "",
    phone: ""

  });
  let postData = registerUser
  const [error, setError] = useState(false);
  const upload =(e)=>{
    e.preventDefault();
    

    if(registerUser.email==="" || registerUser.name === "" || registerUser.password ==="" || registerUser.phone === ""){
      setError(true)
    }else{
    axios.post("http://159.65.21.42:9000/register", postData).then((resp)=> {
      let response =resp.data.error
      if(response){
        alert("user exist")
      }else{
        alert("user Registered successfully")
        (setHide(false), setShow(true), (<Signin />))
      }
      // setRegisterUser({
      //   name:"",
      //   email:"",
      //   password:"",
      //   phone:""
      // })
  }).catch((error)=>{console.log(error)})
    }
  }

  return (
    <div className="signinbody">


      <form className="body-for-signin" onSubmit={upload}>
        <div className="signin-manin">
          <div className="hole-body">
            <div className="signin-or-register">
              <div>
                <h2>Create your account</h2>
                <p>registation is easy.</p>
              </div>
              <div></div>
            </div>
            <div>
              <div className="Email">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" value={registerUser.name} onChange={(e)=>setRegisterUser({...registerUser, name:e.target.value})} />
                {error && registerUser.name === ""? <span>* Full name required..</span>:null }
              </div>
              <div className="password">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text"  value={registerUser.phone} onChange={(e)=>setRegisterUser({...registerUser, phone:e.target.value})} />
                {error && registerUser.phone === ""? <span>* Phone Number required..</span>:null }
              </div>
              <div className="password">
                <label htmlFor="email">Email</label>
                <input type="email" value={registerUser.email} onChange={(e)=>setRegisterUser({...registerUser, email: e.target.value})} />
                {error && registerUser.email === ""? <span>* Email required..</span>:null }
              </div>
              <div className="password">
                <label htmlFor="passowrd">password</label>
                <input type="password" value={registerUser.password} onChange={(e)=>setRegisterUser({...registerUser, password: e.target.value})}/>
                {error && registerUser.password === ""? <span>* Password required..</span>:null }
              </div>
            </div>
            <div className="click-sign-in">
              <button>Register</button>
            </div>
            <div className="trouble-sign-in">
              <Link className="trouble-sign-in-link">Trouble signing in?</Link>
            </div>
            <div className="or">
              <span>OR</span>
            </div>
            <div className="continue-with">
              <button>
                <div className="adjust">
                  <img src={img} alt="dsd" />
                  Continue with Google
                </div>
              </button>
              <button>
                <div className="adjust">
                  <img src={img2} alt="sds" />
                  Continue with Facebook
                </div>
              </button>
              <button>
                <div className="adjust">
                  <img src={img3} alt="sds" />
                  Continue with Apple
                </div>
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => (setHide(false) ? setShow(false) : null)}
          className="cancel">
          X
        </button>
      </form>


    </div>
  );
}
export default Register;
