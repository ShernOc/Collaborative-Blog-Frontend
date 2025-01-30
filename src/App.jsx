import { useEffect, useState } from 'react';
// import Blog from './Components/Blog'
// import './App.css'
// import Comment from './Components/Comment'
// import Dashboard from './Components/Dashboard'
// import Contact from './Components/Contact'

import Blogcard2 from "./Components/Blogcard2"

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
      <Blogcard2/>
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
