import React, { useState } from 'react';
import Search from '../shared/Search';
import CollegeCard from '../component/Home/CollegeCard';
import UseAxios from '../hook/useAxios';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../shared/Spinner';

const Colleges = () => {
    const[search,setSearch]=useState('')
     const axiosSecure=UseAxios()
    const {data:colleges,isLoading,refetch}=useQuery({
        queryKey:['collegeCollection'],
    
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/colleges?search=${search}`)
            return(data)
        }
    })

    if(isLoading) return<Spinner/>
    return (
        <div className='mt-10'>
           <Search setSearch={setSearch} refetch={refetch}/>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
            {
                colleges?.map((college)=>  <CollegeCard key={college._id} college={college}/>)
            }
           
         
           </div>
        </div>
    );
};

export default Colleges;