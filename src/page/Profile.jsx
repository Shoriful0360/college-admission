import { useState } from "react"
import useAuth from "../hook/useAuth"
import useFetch from "../hook/useFetch"
import Spinner from "../shared/Spinner"
import axios from "axios"

const Profile = () => {
  const { user, loading } = useAuth()
  const { userInfo, isLoading } = useFetch()
  const { name, image, email, address, university, _id } = userInfo || {}

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: name || "",
    image: image || "",
    email: email || "",
    university: university || "",
    address: address || ""
  })

  if (loading || isLoading) return <Spinner />

  // input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // save updated data
  const handleSave = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/users/${email}`,
        formData
      )
      console.log("Updated:", res.data)

      setIsEditing(false)
      alert("Profile updated successfully!")
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
            src={formData.image || image}
            className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white "
          />

          <p className="p-2 px-4 text-xs text-white bg-lime-500 rounded-full">
            Student
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            Id: M-{_id?.toString().substring(0, 5).toUpperCase()}
          </p>

          {/* 🔥 Show form if editing */}
          {isEditing ? (
            <div className="w-full p-4">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  placeholder="University"
                  className="border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="border rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
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
                  <span className="font-bold text-black">{formData.name}</span>
                </p>
                <p className="flex flex-col">
                  University
                  <span className="font-bold text-black">
                    {formData.university?formData.university:"N/A"}
                  </span>
                </p>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black">{formData.email}</span>
                </p>
                <p className="flex flex-col">
                  Address
                  <span className="font-bold text-black">
                    {formData.address?formData.address:"N/A"}
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
