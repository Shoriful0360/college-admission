import { useState } from "react";
import UseAxios from "../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../shared/Spinner";
import { imageUpload } from "../hook/imageUpload";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";


export default function AdmissionPage() {
  const {user}=useAuth()
   const axiosSecure=UseAxios()
   const navigate=useNavigate()
   const[imgUpload,setImgUpload]=useState(
   {
    image:""
   }
   )
  const [selectedCollege, setSelectedCollege] = useState();
 // 🔹 track submit
  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    email: user?.email,
    phone: "",
    address: "",
    dob: "",
    image: null,
  });


  // data fetch
   const {data:colleges,isLoading}=useQuery({
        queryKey:['college_name'],
    
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/college_name`)
            return(data)
        }
    })



    if(isLoading) return<Spinner/>

// check user then show form
const handleUserCheck=(id,image,name)=>{
  if(!user){
    Swal.fire({
  title: "Login,Please?",
  text: "That thing is still around?",
  icon: "question"
  
});
return
  }else{
    setSelectedCollege(id,image,name)
  }

}

  const handleChange =async (e) => {
   
   

    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     const dob=await imageUpload(imgUpload?.image)
     if(dob){
   formData.image=dob
   const {data}=await axiosSecure.post('/admission',{ ...formData ,...selectedCollege})
    if(data.insertedId){
      Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Admission is Complete",
  showConfirmButton: false,
  timer: 1500
});
      navigate('/my_colleges')
    setSelectedCollege(null); 
    setFormData("")
    setImgUpload("")
    }else{
      alert("something is wrong,please try again")
    }
 
     }
 
    // 🔹 Reset back to college list
    
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          College Admission
        </h1>

        {/* Show College List */}
      {!selectedCollege  && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
    {colleges.map((college) => (
      <div
        key={college._id}
       onClick={() => handleUserCheck({
   colege_id: college.college_id,
   college_image: college.image,
   college_name: college.name,
})}
        className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center"
      >
        
         <div className="flex justify-center">
               <img src={college?.image} alt="" className="w-20 h-20 rounded-full" />
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
        {selectedCollege  && (
          <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
              Admission Form - {selectedCollege?.college_name}
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
                value={user?.email}
                disabled
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


                  {/* Image */}
            <div className=' p-4  sm:w-full  m-auto rounded-lg flex-grow'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                    onChange={(e)=> 
                      setImgUpload(
                        
                        {
                        image:e.target.files[0],
                      url:URL.createObjectURL(e.target.files[0])
                      }
                    )}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                    
                    />
                    <div className='bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500'>
                     {imgUpload?.image?.name?
                     imgUpload?.image?.name
                    :
                    "Upload your image"}
                   
                    </div>
                  </label>
                </div>
              </div>
            </div>

     
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

     
      </div>
    </section>
  );
}
