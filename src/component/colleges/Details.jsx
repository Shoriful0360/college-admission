import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../hook/useAxios";
import Spinner from "../../shared/Spinner";
import { useState } from "react";



const Details = ({id}) => {
const [comment,setComment]=useState()
const[visibleComment,setVisibleComment]=useState(true)
const [editingId,setEditingId]=useState(null)

  const axiosSecure=UseAxios()
    const {data:college,isLoading,refetch}=useQuery({
        queryKey:['college_details',id],
        enabled:!!id,
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/college/${id}`)
            return(data)
        }
    })
    
    if(isLoading ) return <Spinner/>

    const handleComment=async(e)=>{
      e.preventDefault()
      const text=e.target.comment.value;
      e.target.reset()
   
  const newComment = {
    id:Date.now(),
    name: "Shoriful Islam",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJbcr7DRCVqxsvoVQeRG46WBK5N9juu-LDkRIrLl9kTK04q1GU=s96-c",
    comment: text
  };

   await axiosSecure.post(`/comment/${id}`,newComment)
      refetch()
     
    }
    console.log(college)
// edit coment
const handleEditComment=async(collegeId,commentId,text)=>{
console.log(collegeId,commentId,text)

}
console.log(college)
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
 <form onSubmit={handleComment}>
     <fieldset className="fieldset w-full">
  <legend className="fieldset-legend">Your bio</legend>
  <textarea name="comment" className="textarea lg:w-3xl md:w-2xl h-34" placeholder="Bio"></textarea>
  <button  type="submit" className="btn w-fit flex ">send</button>
  
</fieldset>
 </form>
</div>

{/* show comment */}
{
  college?.comment?.map((item)=><div key={item.id} className="border-base-300 mt-4 border-2 p-4 max-w-3xl">
    {/* edit comment */}
    {
     editingId===item.id?    <div>
   <textarea
   defaultValue={item.text}
   onChange={(e)=>setComment(e.target.value)} className="textarea" placeholder="Bio"></textarea>
      <button onClick={()=>{
        handleEditComment(college._id,college.comment.id,comment);
        setEditingId(null)
      }} className="btn bg-blue-500 text-white">send</button>
    </div>
    
  :
  // edit form
 <div>
    <div className="flex items-center gap-4"> 
    <img src={item?.image} alt={item.image} className="w-10 h-10 rounded-full" />
    <h4>{item.name}</h4>
   
  </div>
  <p >{item.comment}</p>
  <button onClick={()=>setEditingId(item.id)} className="btn mt-4">Edit</button>
  </div>
    }
  

</div>)
}
</div>
    );
};

export default Details;