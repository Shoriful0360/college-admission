import { Link } from "react-router";

export default function CollegeCard({college}) {


  return (
  
         <div className="  bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={college.image}
        alt={college.name}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {college.name}
        </h2>
 {/* {"".repeat(college.rating)}{"☆".repeat(5 - college.rating)} */}
        <p className="text-sm text-gray-500 mb-2">
          Admission: <span className="font-medium">{college.admission}</span>
        </p>

        <div className="flex justify-between items-center mb-3">
          <p className="text-yellow-500 font-semibold"><span className="text-black">Rating :</span> ★ {college.rating} </p>
          <p className="text-sm font-bold text-gray-600">
            Research Papers: {college.researchPaper}
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-4">{college.research}</p>

        {/* Events */}
        <div className="mb-3">
          <h3 className="font-semibold text-gray-800 mb-1">Events</h3>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {college.events.map((event, idx) => (
              <li key={idx}>{event}</li>
            ))}
          </ul>
        </div>

        {/* Sports */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-1">Sports</h3>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {college.sports.map((sport, idx) => (
              <li key={idx}>{sport}</li>
            ))}
          </ul>
        </div>

      

        {/* Button */}
    <div className="flex justify-between">
        <Link to={ `/colleges/${college._id}`}>
        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition">
          View Details
        </button>
      </Link>
      {/* <Link to="/colleges/details">
        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition">
          Admission
        </button>
      </Link> */}
    </div>
      </div>
    </div>
  );
}
