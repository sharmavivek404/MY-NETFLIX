 import Header from "./Header";
 import { useState,useRef } from "react";
 import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { icon_url } from "../utils/constants";
 const Login = ()=>{
  const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null); 
    const dispatch=useDispatch();
    const name= useRef(null);
    const email= useRef(null);
    const password =useRef(null); 
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    //sign in/ sign up 
    if(!isSignInForm){
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
 displayName: name.current.value, photoURL: icon_url,
}).then(() => {
  const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName , photoURL:photoURL}));
  
}).catch((error) => {
  setErrorMessage(error.message);
});
    
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage);
  });

    }else{
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }

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
      <div className="absolute bottom-0 left-0 w-full bg-opacity-60 py-4 ">
  <p className="font-bold text-xl md:text-2xl text-red-500">
    ⚠️ EDUCATIONAL PROJECT ONLY
  </p>
</div>

    </div>;
 };
 export default Login;