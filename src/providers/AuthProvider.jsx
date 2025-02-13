import { Children, createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
export const AuthContext = createContext();
export const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const axiosPublic = UseAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const googleProvider =new GoogleAuthProvider();
    console.log(user,loading);
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
        

    }
    
    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        setLoading(true)
        signOut(auth);
    }
    const authInfo = {
        createNewUser,
        user,
        setUser,
        googleSignIn,
        logOut,
        userLogin,
        loading,
        setLoading


    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            if(currentUser){
                const userInfo ={email: currentUser.email};

                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')

            }
            setLoading(false)
        })
        return () =>{
            unSubscribe();

        }
    },[axiosPublic])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;