import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ToastContainer,toast } from 'react-toastify';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import AddBlog from './Components/AddBlog';
import './App.css'
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout'
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {BlogProvider} from './Context/BlogContext';
import {UserProvider} from './Context/UserContext';
import Footer from './Components/Footer';
import BlogCard from './Components/BlogCard';
// not true 
import Blog from './Components/BlogCard';
import Data from '../data';


function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider> 
          <Navbar/>
          <BlogProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addblog" element={<AddBlog/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/layout" element={<Layout/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blogcard" element={<BlogCard />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/data" element={<Data />} />
            </Routes>
          </BlogProvider> 
          <Footer/>
        </UserProvider>
      </BrowserRouter>
    
    </>
  )
}

export default App;
