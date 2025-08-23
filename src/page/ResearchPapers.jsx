import React from 'react';
import ResearchBanner from '../component/ResearchPapers/ResearchBanner';
import ResearchPaperDetails from '../component/ResearchPapers/ResearchPaperDetails';

const ResearchPapers = () => {
    return (
        <div className='mt-10'>
           <ResearchBanner/> 
           <ResearchPaperDetails/>
        </div>
    );
};

export default ResearchPapers;