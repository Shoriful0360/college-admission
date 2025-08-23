import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../hook/useAuth";



const Navbar = () => {
  const{user,logOut}=useAuth()
  const naigate=useNavigate()
  console.log(user)
 
const handleLogout=()=>{
  logOut()
  naigate('/login')
}

  const link = <>
    <li className='text-sm bg-blue-500 bg-clip-text text-transparent font-bold  px-4 py-2'>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li className='text-sm bg-blue-500 bg-clip-text text-transparent font-bold  px-4 py-2'>
      <NavLink to='/colleges'>Colleges</NavLink>
    </li>
    <li className='text-sm bg-blue-500 bg-clip-text text-transparent font-bold  px-4 py-2'>
      <NavLink to='/admission'>Admission</NavLink>
    </li>
    <li className='text-sm bg-blue-500 bg-clip-text text-transparent font-bold  px-4 py-2'>
      <NavLink to='/my_colleges'>My College</NavLink>
    </li>
    
  </>

 
  return (
  <div className="navbar  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {link}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-orange-600 text-2xl font-bold">Target</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
   {link}
    </ul>
  </div>
  {/* Profile */}

  <div className="navbar-end">
    {
      user?
       <div className="dropdown dropdown-end">
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full  flex items-center justify-center">
    <img
   
      alt="Tailwind CSS Navbar component"
      src="https://img.icons8.com/?size=64&id=43964&format=png"
    />
  </div>
</div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to={'/profile'} className="justify-between">
            Profile
        
          </Link>
        </li>
        
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
    :
   <Link to={'/login'}> <button className="btn bg-blue-700 text-white">Login</button></Link>
    }

   
  </div>
</div>
  );
};

export default Navbar;