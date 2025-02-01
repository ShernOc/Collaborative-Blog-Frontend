import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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


function App() {

  // const [error, setError] = useState(null);
  // // State to hold errors
  // const [data, setData] = useState(null)
  // // api variable
  // const apiUrl = 'http://127.0.0.1:5000/';

  // // Backend Communication with Cors2
  // useEffect(() => {
  //   fetch(`${apiUrl}/`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network not responsive');
  //       }
  //       return response.json();
  //     })
  //     .then((json) => setData(json))
  //     .catch((err) => setError(err.message));
  // }, [apiUrl]);

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
            </Routes>
          </BlogProvider> 
          <Footer/>
        </UserProvider>
      </BrowserRouter>
    {/* <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <div>
        <h1>data is fetched</h1>
          <p>Loading.. Success the app is loading </p>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>) : (
            <p>Loading...
            Success the app is loading </p>
        )}
          </div> */}
    </>
  )
}

export default App;
