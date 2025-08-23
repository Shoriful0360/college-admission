import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const graduates=[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75fqhb8F3fXLO4F37XYOigaj_3LUTDcLuyEOETonA7-KKKBRj9p74y5PzPw7YS76uKWE&usqp=CAU",
        name:"Viqarunnisa Noon School & College"
    },
    {
        img:"https://futuredoctors.in/wp-content/uploads/2024/03/Dhaka-National-Medical-College-Bangladesh.jpg",
        name:"Dhaka National Medical College Bangladesh"
    },
    {
        img:"https://hips.hearstapps.com/hmg-prod/images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpg",
        name:" Library of Trinity College "
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQP1Rx5yvTdM_sQnkejZVT0qDH0TwuVqsPJymt7hGoyZLz0LqS9Uy5UTHnvSrfJhoxujs&usqp=CAU",
        name:"Dhaka College"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-DOVroqVAcs-p_ZF0b9KNN-Lgr3FOJBz0A&s",
        name:"Stanford University"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6XkaxcHHfyRx8kBjoiRqho7sOT6j0__EQQ&s",
        name:"Rangpur Medical college c"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Barishal_University_Campus%2C_Bangladesh.jpg",
        name:"Barishal University"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeADc1KglcWJ9cgIe_9voZrjvIPW0TiShKR98-j1beAcz1qO5vRlvumG9YrQ3JWnj6puE&usqp=CAU",
        name:"Cox's Bazar Govt. College"
    },
]


export default function CollegeGallery() {
  const containerRef = useRef(null);
  const [angle, setAngle] = useState(0);

  useAnimationFrame((time, delta) => {
    setAngle((prev) => prev + delta * 0.0005);
  });

  const radius = 280; 
  const centerX = 300; 
  const centerY = 270; 

  return (
    <div className="">
        <div className="text-center">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          🎓 College Graduates Gallery
        </h2>
        <p className="text-gray-600 mb-12">
          Celebrating proud moments of graduates across different colleges.
        </p>
        </div>
    <div className="relative w-full  flex items-center justify-center bg-gradient-to-tr from-blue-500 via-green-800 to-orange-400 overflow-hidden px-4">
      <div ref={containerRef} className="relative w-full max-w-[600px] h-[600px] md:h-[500px] sm:h-[400px]">
        {graduates.map((grad, idx) => {
          const theta = (idx / graduates.length) * Math.PI * 2 + angle;
          const x = centerX + radius * Math.cos(theta) - 60;
          const y = centerY + radius * Math.sin(theta) * 0.5 - 60;

          return (
            <motion.div
              key={idx}
              className="absolute w-32 h-32  cursor-pointer rounded-xl overflow-hidden shadow-2xl"
              style={{ top: y, left: x, zIndex: Math.round(1000 - y) }}
              whileHover={{ scale: 1.4, zIndex: 2000 }}
            >
              <img
                src={grad.img}
                alt={grad.name}
                className="w-full h-full object-cover"
              />
              {/* Glass effect overlay on hover */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-xs rounded-xl text-white font-semibold text-center text-sm px-2 opacity-0"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {grad.name}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
