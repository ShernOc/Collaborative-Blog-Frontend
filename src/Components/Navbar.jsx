// import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Logout from "./Logout";


function Navbar() {

  const { current_user,users } = useContext(UserContext);


  return (
    <>
      <div className="bg-gray-950 
    fixed start-0 w-full z-20 top-0 border-gray-200 dark:border-gray-600 font-mono border-b">
        <div className=" flex-wrap flex justify-between">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="images/logo.jpg" className="h-15" alt="book logo" />
            <a className="bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-3xl font-semibold tracking-tighter text-transparent dark:from-cyan-300 dark:to-teal-200 font-sans" href="/">Collaborative Blog Platform</a>
          </Link>
          {/* Main Navbar */}
          <div className=" justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-default">
            <ul className=" text-2xl flex flex-col p-10 md:p-0 mt-4 font-medium rounded-lg bg-gray-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-950 md:dark:bg-gray-950">
              <li>
                <Link to="/" className="block py-2 px-3 text-cyan-400 rounded-sm  md:text-cyan-300 hover:md:dark:text-cyan-600" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 text-cyan-400 rounded-sm  md:text-cyan-300 hover:md:dark:text-cyan-600">Contacts</Link>
              </li>
              <div id="protect routes">
                {current_user== users? (
                  <>
              <li>
                <Link to="/dashboard" className="block py-2 px-3 text-cyan-400 rounded-sm  md:text-cyan-300 hover:md:dark:text-cyan-600" aria-current="page">Dashboard</Link>
              </li>
              <li>
                  <Link to="/addblog" className="block py-2 px-3 text-cyan-400 rounded-sm  md:text-cyan-300 hover:md:dark:text-cyan-600">Add a Blog</Link>
                    </li>
                    <li>
                      <Link to="/profile" className="block py-2 px-3 text-cyan-400 rounded-sm  md:text-cyan-300 hover:md:dark:text-cyan-600">Profile</Link>
                    </li>
                    <li>
                <Logout />
                   </li>
                  </>) : (
                  <li>
                    <Link to="/login">
                      <button type="button" className=" block md:hover:bg-cyan-100 bg-gray-500 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-semibold rounded-3xl px-3 py-2 text-center "> Login</button>
                    </Link>
                  </li>)}
              </div>
              {/* <li>
                <Link to="/signup">
                  <button type="button" className=" block md:hover:bg-cyan-100 bg-gray-500 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-semibold rounded-3xl px-3 py-2 text-center ">Signup</button> </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;

