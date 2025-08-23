import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import UseAxios from "./useAxios";




const useFetch = () => {
    const axiosSecure=UseAxios()
    const{user}=useAuth()
    const {data:userInfo,isLoading,refetch}=useQuery({
        queryKey:['user',user?.email],
        enabled:!!user,
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/user/${user?.email}`)
            return(data)
        }
    })
    return {userInfo,isLoading,refetch}
};

export default useFetch;
