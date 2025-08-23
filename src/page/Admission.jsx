import { useState } from "react";

export default function AdmissionPage() {
  const colleges = [
    { id: 1, name: "Greenfield University" },
    { id: 2, name: "Tech Valley Institute" },
    { id: 3, name: "Skyline College" },
    { id: 4, name: "Riverdale University" },
    { id: 5, name: "Global Academy" },
  ];

  const [selectedCollege, setSelectedCollege] = useState(null);
  const [submitted, setSubmitted] = useState(false); // 🔹 track submit
  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { ...formData, college: selectedCollege });
    setSubmitted(true); // 🔹 Hide form after submit
    setSelectedCollege(null); // 🔹 Reset back to college list
    alert("🎉 Admission form submitted successfully!");
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          College Admission
        </h1>

        {/* Show College List */}
      {!selectedCollege && !submitted && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
    {colleges.map((college) => (
      <div
        key={college.id}
        onClick={() => setSelectedCollege(college.name)}
        className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center"
      >
        
         <div className="flex justify-center">
               <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80" alt="" className="w-20 h-20 rounded-full" />
         </div>
      
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
          {college.name}
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Click to view details about {college.name}
        </p>
      </div>
    ))}
  </div>
)}

        {/* Admission Form */}
        {selectedCollege && !submitted && (
          <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
              Admission Form - {selectedCollege}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="candidateName"
                placeholder="Candidate Name"
                value={formData.candidateName}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Candidate Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Candidate Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                required
              />

              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 md:col-span-2"
                rows="3"
                required
              ></textarea>
<input
  type="text"
  onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => (e.target.type = "text")}
  name="dob"
  placeholder="Enter your date of birth"
  value={formData.dob}
  onChange={handleChange}
  className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 w-full"
/>


              <input
              onFocus={(e)=>e.target.type="file"}
              onBlur={(e)=>e.target.type="text"}
             placeholder="Your image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                required
              />

     
              <div className="col-span-2 flex justify-center">
                 <button
                type="submit"
                className=" px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition"
              >
                Submit 
              </button>
              </div>
         
          
            </form>
          </div>
        )}

        {/* Success message */}
        {submitted && (
          <div className="text-center mt-8">
            <p className="text-green-600 font-medium">
              ✅ Your admission form has been submitted.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition"
            >
              Back to College List
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
