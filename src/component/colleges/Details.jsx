import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../hook/useAxios";
import Spinner from "../../shared/Spinner";


const Details = ({id}) => {
console.log(id)
  const axiosSecure=UseAxios()
    const {data:college,isLoading}=useQuery({
        queryKey:['college_details',id],
        enabled:!!id,
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/college/${id}`)
            return(data)
        }
    })
    
    if(isLoading) return <Spinner/>


    return (
      <div className="w-11/12 mx-auto py-12">

<div className="relative w-screen -ml-[calc(50vw-50%)]">
  <h2 className="absolute inset-0 flex items-center justify-center">
    <span className="px-6 py-3 text-3xl font-bold text-blue-500  backdrop-blur-xs rounded-xl">
      {college.name}
    </span>
  </h2>
  <img
src={'https://plus.unsplash.com/premium_photo-1663051238732-d6246f747dab?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
alt={college.name}
className="w-full h-140  object-cover rounded-2xl mb-6"
/>
</div>
<p className="text-lg mb-4">
<span className="font-semibold">Admission Dates:</span> {college.admission}
</p>

        <div className="flex gap-10 mb-3">
          <p className="text-yellow-500 text-lg font-semibold"><span className="text-black">Rating :</span> ★ {college.rating} </p>
          <p className=" font-bold text-lg text-gray-600">
            Research Papers: {college.researchPaper}
          </p>
        </div>
<p className="text-lg mb-4">
<span className="font-semibold">Admission Process:</span> {
college?.admissionProcess.map((item,idx)=><li key={idx} >{item}</li>)
}
</p>
<div className="mb-4">
<h3 className="text-xl font-semibold mb-2">Events Details:</h3>
<ul className="list-disc ml-5 text-gray-700">
{college.events.map((event, idx) => (
<li key={idx}>{event}</li>
))}
</ul>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold mb-2">Research Works:</h3>
<p>{college.research}</p>
</div>
{/* sport category */}
<div>
<h3 className="text-xl font-semibold mb-2">Sports Categories:</h3>
<div className="flex flex-wrap gap-2">
{college.sports.map((sport, idx) => (
<span
key={idx}
className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full"
>
{sport}
</span>
))}
</div>
</div>
{/* description */}
<div className="space-y-2 mt-4">
    <h3 className="text-xl font-bold underline underline-offset-5">Description :</h3>
    <p className="text-justify">{college?.description}</p>
</div>

{/* comment */}
<div>
    <h3 className="text-xl font-bold underline underline-offset-5 mt-4 ">Comment :</h3>
    <fieldset className="fieldset w-full">
  <legend className="fieldset-legend">Your bio</legend>
  <textarea className="textarea lg:w-3xl md:w-2xl h-34" placeholder="Bio"></textarea>
  <button className="btn w-fit flex ">send</button>
  
</fieldset>
</div>
</div>
    );
};

export default Details;