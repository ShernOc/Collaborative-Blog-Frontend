// import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar(){

    return(
        <>
        <h1>Nav Bar</h1>
    <nav className="bg-gray-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 rounded-3xl">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true"  fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    
      <img src="images/logo.jpg" className="h-15" alt="Flowbite Logo"/>
      <a className="bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-cyan-300 dark:to-teal-200" href="/">Collaborative Blog Platform</a>
    </a>
    {/* Main Navbar */}
    <div className="items-center justify-between hidden w-full md:flex md:w-auto  md:order-1" id="navbar-default">
    <ul className=" text-2xl flex flex-col p-10 md:p-0 mt-4 font-medium border-black rounded-lg bg-gray-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-950 md:dark:bg-gray-950">
      <li>
        <Link to = "/" className="block py-2 px-3 text-cyan-300 rounded-sm md:bg-transparent md:text-cyan-300  md:dark:text-cyan-300" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to ="/contact" className="block py-2 px-3 text-zinc-300 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-300  dark:border-gray-700">Contacts</Link>
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

