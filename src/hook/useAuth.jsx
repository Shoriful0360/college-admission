import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";


const useAuth = () => {
    const useAuthContext=useContext(authContext)
    return useAuthContext
};

export default useAuth;