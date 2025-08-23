import React from 'react';
import Search from '../shared/Search';
import CollegeCard from '../component/Home/CollegeCard';
import CollegeGallery from '../component/Home/CollegeGallery';

const HomePage = () => {
    return (
        <div className='mt-10'> 
           {/* search */}
           <Search/>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
       
             <CollegeCard/>
             <CollegeCard/>
             <CollegeCard/>
          </div>
          <div>
            <CollegeGallery/>
          </div>
        </div>
    );
};

export default HomePage;