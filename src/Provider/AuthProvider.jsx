import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const authContext=createContext()


const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider()
    const[user,setUser]=useState()
    const[loading,setLoading]=useState(true)

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
           setLoading(false)
        }else{
            setUser(null)
        }
       })

       return ()=>{
        unSubscribe()
       }
    },[])



     const authInfo={
        createUser,user,setUser,loading,loginUser,logOut,googleLogin
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