// Login.jsx
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

function Login() {
  const { login } = useContext(UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

// event handle_submit 
  function handleSubmit (e){
    e.preventDefault()
   if (!email || !password) {
    return alert("Password and email are required");
  } 
   login(email, password)
  } 
    
  return (
    <div className="flex p-20 justify-center items-center min-h-[80vh] font-mono">
      <form id='login'
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-2xs space-y-8 bg-cyan-100 rounded-2xl h-min ">

        <h3 className="text-2xl my-4 mb-2 font-bold font-mono">Login Page</h3>

        <div className='relative mb-6'>
          <label className=" flex items-center mb-2 text-2xl font-bold ">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full h-12 px-10 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder='Enter Email'
            required
          />
        </div>
        <div className='relative mb-6'>
          <label className="block text-2xl font-bold ">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" block w-full h-12 px-10 py-2.5 bg-white leading-6 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder=' Enter Password'
            required
          />
        </div>

        <button type="submit" className=" h-12 bg-gray-500 hover:bg-cyan-800 transition-all duration-700 rounded-full shadow-xs text-black text-base font-semibold leading-6 mb-6 px-10"
        > Login </button>
        <div className='font-mono text-blue-950 font-semibold'>
          Not Signed? <Link to="/signup" d>Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;


