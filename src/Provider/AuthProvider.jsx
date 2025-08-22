import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const authContext=createContext()


const AuthProvider = ({children}) => {
    const[user,setUser]=useState()
    const[loading,setLoading]=useState(true)

    // register
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
        
      
    }

    // on auth stage check
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,async(currentUser)=>{
        
        if(currentUser?.email){
           setUser(currentUser)
           setLoading(false)
        }
       })

       return ()=>{
        unSubscribe()
       }
    },[])



     const authInfo={
        createUser,user,setUser,loading
    }
// logOut,loginUser,googleLogin,updateUserProfile,forgetPassword
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
            
        </div>
    );
};

export default AuthProvider;