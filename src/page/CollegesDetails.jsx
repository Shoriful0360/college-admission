import { useParams } from "react-router";
import Details from "../component/colleges/Details";



const CollegesDetails = () => {
    const {id}=useParams()
   
    return (
        <div>
         <Details id={id}/>
        </div>
    );
};

export default CollegesDetails;