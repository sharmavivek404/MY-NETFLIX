 import Header from "./Header";
 import { useState,useRef } from "react";
 import { checkValidData } from "../utils/Validate";
 const Login = ()=>{
  const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null); 
    const name= useRef(null);
    const email= useRef(null);
    const password =useRef(null); 
  const handleButtonClick = () => {
    const message = checkValidData(name.current.value,email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    //sign in/ sign up 

  }
     const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
    return <div >
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg" alt="bg_img"/>
      </div>
      <div>
        <form 
          onSubmit={(e)=> e.preventDefault()}
          className="w-full md:w-3/12 absolute p-12  bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
         <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
           ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>

        </form>
      </div>

    </div>;
 };
 export default Login;