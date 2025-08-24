import React, { useState } from 'react';
import ReviewForm from '../component/myCollege/ReviewForm';
import { TbListDetails } from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
import ReviewModal from '../component/myCollege/ReviewModal';
import useAuth from '../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxios from '../hook/useAxios';
import { Link } from 'react-router';
import Swal from 'sweetalert2';


const MyCollege = () => {
  const {user}=useAuth()
  const axiosSecure=UseAxios()
  const [candidateInfo,setCandidateInfo]=useState()


     const [isModalOpen, setIsModalOpen] = useState(false);

       const{data:myAdmission,isLoading}=useQuery({
    queryKey:['my_admission',user?.email],
    queryFn:async()=>{
      const {data}=await axiosSecure.get(`/my_admission/${user?.email}`)
      
      return data
    }
  })

  const handleCollegeInfo=(CollegeName,email,image)=>{
    setCandidateInfo(CollegeName,email,image)
    setIsModalOpen(true)

  }

  const handleReviewSubmit = async(newReview) => {
    console.log('new review',newReview)
    const reviewWithMeta = {
      ...newReview,...candidateInfo
      
    };

    const {data}=await axiosSecure.post('/reviews',reviewWithMeta)
    if(data. insertedId){
      Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Thank you for give review",
  showConfirmButton: false,
  timer: 1500
});
    }else{
      alert("something is wrong ,please try agian !")
    }
  
  };
    return (
         <div className="p-6 mx-auto bg-white shadow-md rounded-xl">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SI</th>
        <th>Name</th>
        <th>College Name</th>
        <th>Email</th>
        <th>Number</th>
        <th>Subject</th>
        <th>Details</th>
        <th>Add Review</th>
      </tr>
    </thead>
    <tbody>
    
  
  {
    myAdmission?.map((admission,idx)=>  <tr key={admission._id}>
        <th>{idx +1}</th>
        <td>{admission?.candidateName}
</td>
        <td>{admission?.college_name
}</td>
        <td>{admission?.email}</td>
        <td>{admission?.phone}</td>
        <td>{admission?.subject}</td>
      
       <Link to={`/colleges/${admission?.colege_id}`}> <td><button className='btn text-blue-600'><TbListDetails /></button></td></Link>
        <td><button onClick={() => handleCollegeInfo({
          collegeName:admission?.college_name,
          name:admission?.candidateName,
          image:admission?.image
        })} className='btn text-blue-600'><MdOutlineReviews /></button></td>
      </tr>)
  }

    
    </tbody>
  </table>
</div>

      
      {/* Review Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />
    
    </div>
    );
};

export default MyCollege;