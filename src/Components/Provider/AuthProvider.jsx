import { createContext, useEffect, useState } from "react";
import app from "../fireBase_Config";
// import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //  create a user
  const createUser = (email, Password) => {
    return createUserWithEmailAndPassword(auth, email, Password);
  };
  // sing Out
  const logOut = () => {
     signOut(auth);
    return setUser(null)
  };
  // coad k objerb করার লাগি
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    setUser,
    user,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
