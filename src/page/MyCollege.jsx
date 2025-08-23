import React, { useState } from 'react';
import ReviewForm from '../component/myCollege/ReviewForm';
import { TbListDetails } from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
import ReviewModal from '../component/myCollege/ReviewModal';


const MyCollege = ({ userData, selectedCollege, addReview }) => {
     const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReviewSubmit = (newReview) => {
    console.log('new review',newReview)
    const reviewWithMeta = {
      ...newReview,
      college: selectedCollege.name,
      candidate: userData.candidateName,
    };
    addReview(reviewWithMeta); // parent e save hobe
  };
    return (
         <div className="p-6 mx-auto bg-white shadow-md rounded-xl">
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>College Name</th>
        <th>Email</th>
        <th>Number</th>
        <th>Details</th>
        <th>Add Review</th>
      </tr>
    </thead>
    <tbody>
    
   
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td ><button className='btn'>Add</button></td>
        <td><button className='btn text-blue-600'><TbListDetails /></button></td>
        <td><button onClick={() => setIsModalOpen(true)} className='btn text-blue-600'><MdOutlineReviews /></button></td>
      </tr>
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