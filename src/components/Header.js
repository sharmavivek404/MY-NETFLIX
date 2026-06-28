 import { useNavigate } from "react-router-dom";
 import { auth } from "../utils/firebase";
 import { signOut } from "firebase/auth";
 import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { bg_Logo } from "../utils/constants";

 const Header = ()=>{
  const dispatch=useDispatch();
  const navigate= useNavigate();
  const user = useSelector((store) => store.user);
    const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };
  const unsubscribe = useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName , photoURL:photoURL}));
      navigate("/browse");
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/");
    }
    
  });
  // unsubscribe the onauthstatechanged callback when components unmounts.
  return () => unsubscribe();
  },[]);
    return (
    <div className="absolute w-full flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black z-20">
      <img 
        className="w-44" 
        src={bg_Logo}
        alt="logo"
      />
      
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="userphoto" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
 export default Header;