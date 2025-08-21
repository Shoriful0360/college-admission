import React from 'react';
import Search from '../shared/Search';
import CollegeCard from '../component/Home/CollegeCard';

const Colleges = () => {
    return (
        <div className='mt-10'>
           <Search/>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
            <CollegeCard/>
            <CollegeCard/>
            <CollegeCard/>
            <CollegeCard/>
           </div>
        </div>
    );
};

export default Colleges;