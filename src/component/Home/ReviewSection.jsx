"use client";
import { useQuery } from "@tanstack/react-query";

import Marquee from "react-fast-marquee";
import UseAxios from "../../hook/useAxios";
import Spinner from "../../shared/Spinner";


export default function ReviewSection() {
  const axiosSecure=UseAxios()
  
   const {data:reviews,isLoading}=useQuery({
        queryKey:['reviews'],
    
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/reviews`)
            return(data)
        }
    })
    
    if(isLoading) return<Spinner/>

  return (
   
    <section className="bg-gray-50 py-16">
      <div className="">
        <h2 className="text-3xl font-bold text-center underline underline-offset-8 text-gray-800 mb-10">
          What Students Say
        </h2>

        {/* Infinite scroll container */}
          <Marquee
          speed={80}
          >
        <div
        
          className="flex gap-6 flex-wrap  "
        >
          {[...reviews, ...reviews].map((review, idx) => (
         
             <div
              key={idx}
              className="bg-white w-100 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105"
            >
              {/* Top section with image + name */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.
name
}
                  className="w-12 h-12 rounded-full border-2 border-indigo-500 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.collegeName}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-3 text-yellow-400 text-lg">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </div>

              {/* Review text (clamped to avoid overflow) */}
              <p className="text-gray-600 text-justify ">
                "{review.review.substring(0,250)}"
              </p>
            </div>
          ))}
        </div>
           </Marquee>
      </div>
    </section>
  );
}
