import React from 'react';
import Search from '../shared/Search';
import CollegeCard from '../component/Home/CollegeCard';
import CollegeGallery from '../component/Home/CollegeGallery';
import ResearchPapersCard from '../component/Home/ResearchPaperCard';
import ReviewSection from '../component/Home/ReviewSection';
import {useQuery } from '@tanstack/react-query';
import UseAxios from '../hook/useAxios';

import Spinner from '../shared/Spinner';
import { Link } from 'react-router';

const HomePage = () => {

 const axiosSecure=UseAxios()
   
    const {data:colleges,isLoading}=useQuery({
        queryKey:['colleges'],
    
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/limit_colleges`)
            return(data)
        }
    })

    if(isLoading) return<Spinner/>

    return (
        <div className='mt-10 space-y-10'> 
           {/* search */}
           <Search/>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
            {
                colleges?.map((college)=><CollegeCard college={college}/>)
            }
       
             
            
          </div>
             <div className='flex justify-center '>
                 <Link to={ `/colleges`} >
        <button className=" px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition">
          View Details
        </button>
      </Link>
             </div>
            <CollegeGallery/>
            <ResearchPapersCard/>
          
            <ReviewSection></ReviewSection>
          
        </div>
    );
};

export default HomePage;