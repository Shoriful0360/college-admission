import { useState, useEffect } from "react"
import useAuth from "../hook/useAuth"
import useFetch from "../hook/useFetch"
import Spinner from "../shared/Spinner"
import UseAxios from "../hook/useAxios"
import Swal from "sweetalert2"

const Profile = () => {
  const { user, loading, updateUserProfile } = useAuth()
  const { userInfo, isLoading, refetch } = useFetch()
  const axiosPublic = UseAxios()
  const { name, image, email, address, university, _id } = userInfo || {}

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    email: "",
    university: "",
    address: ""
  })

  // Sync formData whenever userInfo changes
  useEffect(() => {
    if (userInfo) {
      setFormData({
        name: name || "",
        image: image || "",
        email: email || "",
        university: university || "",
        address: address || ""
      })
    }
  }, [userInfo])
  console.log(formData)

  if (loading || isLoading) return <Spinner />

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Save updated data
  const handleSave = async () => {
    console.log(formData)

    
    try {
      const res = await axiosPublic.put(`users/${user?.email}`, formData)
      if(res.data.acknowledged){
        await updateUserProfile(formData.name, formData.image)
        Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

      }
     // Refetch updated info from server
      refetch()

      setIsEditing(false)
    
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          alt="cover photo"
          src="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?w=500&auto=format&fit=crop&q=60"
          className="w-full mb-4 object-cover rounded-t-lg h-65"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <img
            alt="profile"
            src={formData?.image || image}
            className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white "
          />

          <p className="p-2 px-4 text-xs text-white bg-lime-500 rounded-full">
            Student
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            Id: M-{_id?.toString().substring(0, 5).toUpperCase()}
          </p>

          {/* Show form if editing */}
          {isEditing ? (
            <div className="w-full p-4">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <input
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="university"
                  value={formData?.university}
                  onChange={handleChange}
                  placeholder="University"
                  className="border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="address"
                  value={formData?.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="image"
                  value={formData?.image}
                  onChange={handleChange}
                  placeholder="Profile Image URL"
                  className="border rounded-lg px-3 py-2"
                />
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 px-6 py-1 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-lime-500 px-6 py-1 rounded-lg hover:bg-lime-700 text-white"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="grid grid-cols-2 justify-between gap-4 text-sm text-gray-600">
                <p className="flex flex-col">
                  Name
                  <span className="font-bold text-black">{formData?.name}</span>
                </p>
                <p className="flex flex-col">
                  University
                  <span className="font-bold text-black">
                    {formData.university ? formData.university : "N/A"}
                  </span>
                </p>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black">{formData.email}</span>
                </p>
                <p className="flex flex-col">
                  Address
                  <span className="font-bold text-black">
                    {formData.address ? formData.address : "N/A"}
                  </span>
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-lime-500 px-10 py-1 rounded-lg text-black cursor-pointer hover:bg-lime-800 block mb-1"
                >
                  Update Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
