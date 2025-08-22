import { createContext, useState } from "react";


export const authContext=createContext()


const AuthProvider = ({children}) => {
    const[user,setUser]=useState('')
    const[loading,setLoading]=useState(true)


    const authInfo={user,setUser,loading,setLoading}

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
            
        </div>
    );
};

export default AuthProvider;