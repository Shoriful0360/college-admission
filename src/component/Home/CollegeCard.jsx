import { Link } from "react-router";

export default function CollegeCard() {
  const college = {
id: 1,
name: "Greenfield University",
image:
"https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
admission: "March 10 - June 15, 2025",
   rating: 4,
     researchCount: 24,
admissionProcess:
"Step 1: Submit online application. Step 2: Appear in the entrance test. Step 3: Shortlisted students will be called for interview. Step 4: Final merit list published with admission confirmation.",
events: ["Tech Fest 2025", "Cultural Week", "Innovation Summit"],
research:
"Ranked top 10 in AI & Data Science Research with over 200+ published papers.",
sports: ["Football", "Basketball", "Athletics"],
}

  return (
  
         <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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
          <p className="text-yellow-500 font-semibold"><span className="text-black">Rating :</span> {"★".repeat(college.rating)}{"☆".repeat(5-college.rating)} </p>
          <p className="text-sm font-bold text-gray-600">
            Research Papers: {college.researchCount}
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
        <Link to="/colleges/details">
        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition">
          View Details
        </button>
      </Link>
      <Link to="/colleges/details">
        <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition">
          Admission
        </button>
      </Link>
    </div>
      </div>
    </div>
  );
}
