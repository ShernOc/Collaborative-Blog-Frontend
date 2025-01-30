import { useEffect, useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog'
import './App.css'
import Comment from './Components/Comment'
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';

function App() {

  //   <>
  //   {/* <Dashboard/>
  //   <Contact/>
  
  //   <Comment/> */}

  //   <Blogcard/>
  //   </>

  // )

//   // hold the data
  const [error, setError] = useState(null); 
  // State to hold errors
  const [data,setData] =  useState(null)
  // api variable
  const apiUrl = 'http://127.0.0.1:5000/';

  // Backend Communication with Cors2
  useEffect(() => {
    fetch(`${apiUrl}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, [apiUrl]);

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/blog" element = {<Blog/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/comment" element = {<Comment/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/signup" element = {<Signup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   


      <br />
      <br /> <br /> <br /> <br /> 
      <div>
      
      <h1 className=' text-3xl text-emerald-500 font-bold'>Collaborative Blog Platform </h1>
      <p>Loading...
        Success the app is loading </p> 

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : ( 
        <p>Loading...
        Success the app is loading </p>
      )}

     </div>
  </>
  )
}

export default App
