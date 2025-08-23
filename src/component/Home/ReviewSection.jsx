"use client";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
const reviews = [
  {
    id: 1,
    name: "John Smith",
    college: "Harvard University",
    review:
      "Amazing faculty and top-class research facilities. My experience here shaped my career in the best possible way!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Sophia Lee",
    college: "Stanford University",
    review:
      "The campus life is vibrant and the academic environment is unmatched. I highly recommend this college.",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Arjun Patel",
    college: "MIT",
    review:
      "Innovative courses and brilliant professors. It’s the hub for future leaders in tech and science.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Maria Garcia",
    college: "Oxford University",
    review:
      "The academic culture and resources available are world-class. Studying here has been a dream come true.",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "Chen Wei",
    college: "Cambridge University",
    review:
      "Strong academic reputation and supportive environment for international students. Truly outstanding.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=5",
  },
];

export default function ReviewSection() {


  return (
    <section className="bg-gray-50 py-16">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
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
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-indigo-500 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.college}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-3 text-yellow-400 text-lg">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </div>

              {/* Review text (clamped to avoid overflow) */}
              <p className="text-gray-600 ">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
           </Marquee>
      </div>
    </section>
  );
}
