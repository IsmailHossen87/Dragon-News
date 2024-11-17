import { createContext, useEffect, useState } from "react";
import app from "../fireBase_Config";
// import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader,setloader] = useState(true)
  //  create a user
  const createUser = (email, Password) => {
    setloader(true)
    return createUserWithEmailAndPassword(auth, email, Password);
  };
  // login create
  const createLogin = (email,password)=>{
    setloader(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  // sing Out
  const logOut = () => {
     signOut(auth);
     setloader(true)
    return setUser(null)
  };
  // updata Profile
  const updataProfile = (updataData)=>{
    return updateProfile(auth.currentUser,updataData)

  }
  // coad k objerb করার লাগি
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setloader(false)
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    createLogin,
    setUser,
    user,
    logOut,
    loader,
    updataProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
