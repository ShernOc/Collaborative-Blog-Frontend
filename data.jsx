import { useEffect, useState } from 'react';


function Data(){
    const [error, setError] = useState(null);
// State to hold errors
const [data, setData] = useState(null)
// api variable
const apiUrl = 'http://127.0.0.1:5000';

// Backend Communication with Cors2
useEffect(() => {
  fetch(`${apiUrl}/`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network not responsive');
      }
      return response.json();
    })
    .then((json) => setData(json))
    .catch((err) => setError(err.message));
}, [apiUrl]);



    return (
        <>
      <div>
        <h1>data is fetched</h1>
          <p>Loading.. Success the app is loading </p>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>) : (
            <p>Loading...
            Success the app is loading </p>
        )}
          </div>
        
        </>
    )
}

export default Data; 