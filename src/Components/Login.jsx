// Login.jsx
import { useState, useContext } from 'react';
// import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router';
import { UserContext } from '../contentext/UserContext';
// import { useAuth } from "./Signin";
// // import { Navigate } from 'react-router';

//Login

function Login() {
  const { login } = useContext(UserContext)

  // console.log("current user", Current_user)

  // const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // event onSubmit 
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
    if (email != email, password != password) {
      alert("Password or email is wrong")
    } ("/login")
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-2xs space-y-8 bg-cyan-100 rounded-2xl h-min ">

        <h3 className="text-2xl my-4  mb-2 font-bold font-mono">Login Page</h3>

        <div className='relative mb-6'>
          <label className=" flex items-center mb-2 text-2xl font-medium">Email</label>
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
          <label className="block text-2xl font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" block w-full h-12 px-10 py-2.5 bg-white leading-6 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder=' Enter Password'
            required
          />
        </div>

        <button type="button" className=" h-12 bg-gray-500 hover:bg-cyan-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6 mb-6 px-10"
        > Login </button>
        <div>
          Not Signed? <Link to="/signup" className='text-blue-950 font-semibold'>Signup</Link>
        </div>

      </form>
    </div>
  );
};

export default Login;