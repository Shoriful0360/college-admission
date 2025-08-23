import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import UseAxios from "../hook/useAxios";


export const authContext=createContext()


const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider()
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    const axiosPublic=UseAxios()

    // register
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
        
      
    }
       

    // login with email and passwore
 
const loginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// logout user
    const logOut=()=>{
        return signOut(auth)
    } 

// login with google
const googleLogin=()=>{
    setLoading(true)
return signInWithPopup(auth,provider)

}

// update user profile
const updateUserProfile=(name,photoUrl)=>{

    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photoUrl
    })
}

// forget  password
const forgetPassword=(email)=>{
    setLoading(true)
return sendPasswordResetEmail(auth,email)
}

    // on auth stage check
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,async(currentUser)=>{
        
        if(currentUser?.email){
         
           setUser(currentUser)
              // user save in database
                await axiosPublic.post(`/user/${currentUser?.email}`,{
                    name:currentUser?.displayName,
                    email:currentUser?.email,
                    image:currentUser?.photoURL
                })
           setLoading(false)
        }else{
            setUser(null)
        }
       })

       return ()=>{
        unSubscribe()
       }
    },[axiosPublic])



     const authInfo={
        createUser,user,setUser,loading,loginUser,logOut,googleLogin,updateUserProfile,forgetPassword
    }
// ,loginUser,,updateUserProfile,forgetPassword
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
            
        </div>
    );
};

export default AuthProvider;