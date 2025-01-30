// import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";


function Navbar(){

    return(
        <>
        <h1>Nav Bar</h1>
    <nav className="bg-gray-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 rounded-3xl">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="images/logo.jpg" className="h-15" alt="Flowbite Logo"/>
      <a className="bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-cyan-300 dark:to-teal-200" href="/">Collaborative Blog Platform</a>
    </a>
    
  {/* <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button> */}
  {/* <!-- Dropdown menu User Mene  --> */}
      {/* <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div> */}

             {/* Main Navbar  */}
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky ">
    <ul className=" text-2xl flex flex-col p-10 md:p-0 mt-4 font-medium border-black rounded-lg bg-gray-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-950 md:dark:bg-gray-950">
      <li>
        <Link to = "/" className="block py-2 px-3 text-cyan-300 rounded-sm md:bg-transparent md:text-cyan-300  md:dark:text-cyan-300" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to ="/contacts" className="block py-2 px-3 text-zinc-300 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-300  dark:border-gray-700">Contacts</Link>
      </li>

      <li>
        <Link to ="/blog" className="block py-2 px-3 text-zinc-300 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-300  dark:border-gray-700">Blogs</Link>
      </li>
      <li>
        <Link to ="/login">
        <button type="button" className=" block md:hover:bg-cyan-100 bg-gray-500 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-bold rounded-3xl px-3 py-2 text-center "> Login </button> 
        </Link>
      </li>
      <li>
        <Link to = "/logout"><button type="button" className=" block md:hover:bg-cyan-100 bg-emerald-300 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-bold rounded-3xl px-3 py-2 text-center ">Logout</button> </Link>
      </li>

    </ul>
  </div>
  </div>
</nav>
 <Outlet/>
 
        </>
    )
}

export default Navbar;

