import { useContext, useState } from "react";
import { USerContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import img from "../image/google.jpeg";
import img2 from "../image/facebook.png";
import img3 from "../image/apple.png";
import Register from "./Register";
import axios from "axios";

function Signin() {
  const { setShow, hide, setHide } = useContext(USerContext);
  const [err, setErr] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const checkLogin = login;
  const loginData = (e) => {
    e.preventDefault();
    
  
   
    if (login.email === "" || login.passoword === "") {
      setErr(true);
    }else{
      axios.post("http://159.65.21.42:9000/login", checkLogin)
      .then((resp) => {
        if(resp.data.error){
          alert(resp.data.error) 
        }else{alert("login sucessfully...")}
      }
        
        
      )
      .catch((error) => console.log(error));
    }
  };

  return (
    <div className="signinbody">
      <div className="body-for-signin">



        <form className="signin-manin" onSubmit={loginData}>
          <div className="hole-body">
            <div className="signin-or-register">
              <div>
                <h2>Sign in</h2>
              </div>
              <div>
                <button
                  onClick={() =>
                    hide
                      ? null
                      : (setHide(true), setShow(false), (<Register />))
                  }>
                  Register
                </button>
              </div>
            </div>
            <div>
              <div className="Email">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  onChange={(e)=>setLogin({...login, email: e.target.value })}
                />
                {err && login.email==="" ? <span>* Email required</span> : null}
              </div>
              <div className="password">
                <label htmlFor="passowrd">password</label>
                <input
                  type="password"
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
                {err && login.password==="" ? <span>* Password required</span> : null}
              </div>
            </div>
            <div className="stay-sign-in">
              <div>
                <input type="checkbox" />
                <label htmlFor="">Stay signed in</label>
              </div>
              <div>
                <Link className="forgot-password">Forgot your password?</Link>
              </div>
            </div>
            <div className="click-sign-in">
              <button>Sign in</button>
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
            <div className="how-to-sign-up">
              <p>
                By clicking Sign in or Continue with Google, Facebook, or Apple,
                you agree to Etsy's Terms of Use and Privacy Policy. Etsy may
                send you communications; you may change your preferences in your
                account settings. We'll never post without your permission.
              </p>
            </div>
          </div>
        </form>




        <button
          className="cancel"
          onClick={() => (setShow(false) ? setHide(false) : null)}>
          X
        </button>
      </div>
    </div>
  );
}
export default Signin;
