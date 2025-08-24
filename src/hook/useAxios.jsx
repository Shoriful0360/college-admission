import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://server-nine-beryl-41.vercel.app'
}) 
const UseAxios = () => {
 return axiosSecure;
};

export default UseAxios;
