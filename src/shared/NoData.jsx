import React from 'react';

const NoData = () => {
    return (
        <div>
               <div className="flex flex-col items-center justify-center h-64 text-center">
      
        <h2 className="text-xl font-semibold text-gray-600">No Data Found</h2>
        <p className="text-gray-500 mt-2">
          Please check back later or try refreshing the page.
        </p>
      </div>
        </div>
    );
};

export default NoData;