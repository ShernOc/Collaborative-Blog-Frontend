import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import {BlogProvider} from './Context/BlogContext';
import {UserProvider} from './Context/UserContext';
import {CommProvider} from './Context/CommContext'
import './App.css'
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import AddBlog from './Components/AddBlog';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout'
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import BlogCard from './Components/BlogCard';
import Data from '../data';
import EditBlog from './Components/EditBlog';
import OneBlog from './Components/OneBlog';



function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider> 
          <Navbar/>
          <BlogProvider>
          {/* <CommProvider> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addblog" element={<AddBlog/>} />
              <Route path="/editblog" element={<EditBlog/>} />
              <Route path="/oneblog" element={<OneBlog/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/layout" element={<Layout/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blogcard" element={<BlogCard />} />
              <Route path="/data" element={<Data />} />
            </Routes>
            {/* </CommProvider> */}
          </BlogProvider> 
          <Footer/>
        </UserProvider>
        <ToastContainer/>
      </BrowserRouter>
    
    </>
  )
}

export default App;
