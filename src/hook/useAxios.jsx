import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
}) 
// https://server-nine-beryl-41.vercel.app
const UseAxios = () => {
 return axiosSecure;
};

export default UseAxios;
