import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;
const githubProvider = new GithubAuthProvider;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload,setReload] = useState(null)

  const createUserEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

  const showEmailVerification = (user) => {
    setLoading(true);
    return sendEmailVerification(user);
  };

const googleSignEmailPass = ()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}

const gitHubProviderEmailPass = ()=>{
    setLoading(true);
    return signInWithPopup(auth,githubProvider)
}

  const forgotPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOutEmail = ()=>{
    return signOut(auth)
  }

  const createdProfile = (name,photo)=>{
    setReload(true)
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:photo
    });
  }

//   observe user state

useEffect(()=>{
 const unsubsCribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });
    // stop unmount observe 
    return()=>{
        unsubsCribe();
    }
},[reload])

  const authInfo = {
    user,
    loading,
    createUserEmailPass,
    showEmailVerification,
    forgotPass,
    signIn,
    logOutEmail,
    googleSignEmailPass,
    gitHubProviderEmailPass,
    createdProfile,
    setReload
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
