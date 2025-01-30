// Login.jsx
import { useState } from 'react';
// import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router';
// import { useAuth } from "./Signin";
// // import { Navigate } from 'react-router';


const Login = () => {
//   const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

// event onSubmit 
  const handleSubmit = (e) => {
    e.preventDefault();
    (email, password);
    //  useNavigate("/login")
  };
// justify-center p-60 bg-white
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form 
      onSubmit={handleSubmit} 
      className="flex flex-col items-center w-2xs space-y-8 bg-cyan-100 rounded-2xl ">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <div className='relative mb-6'>
          <label className=" text-2xl block  font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder='Enter Email'
            required
          />
        </div>
        <div className='relative mb-6'>
          <label className="block text-2xl font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" block w-full  p-2 border rounded"
            placeholder=' Enter Password'
            required
          />
        </div>
      
        <button type="button" className=" block md:hover:bg-cyan-800 bg-gray-500 focus:ring-4 focus:outline-none focus:ring-black font-bold rounded-2xl px-3 py-2 text-center "> Login </button>
        <div>
          Not Signed? <Link to="/signup" className='text-blue-950 font-semibold'>Signup</Link>
        </div>

      </form>
    </div>
  );
};

export default Login;