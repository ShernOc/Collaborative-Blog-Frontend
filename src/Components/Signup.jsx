import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
// import { useNavigate } from 'react-router-dom';

function Signup() {
  const { addUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if (password != repeatPassword) {
      return alert("Password does not match");
    } 

    addUser (name, email, password);

    };
  
  return (
    <div className="flex justify-center items-center font-mono min-h-[80vh] p-20">
      <form id='signup'
        onSubmit={handleSubmit}
        className="w-[40%] bg-cyan-100 p-4 rounded-2xl h-min">

        <h3 className="text-2xl my-4 font-bold font-mono underline ">Signup</h3>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-2xl font-bold">
            Username
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-2xl font-bold">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full h-12 px-10 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900  border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Enter Email"
            required
          />
        </div>
        {/* is_admin */}
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-2xl font-bold">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full h-12 px-10 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900  border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Password"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-semibold w-full ">
            Repeat Password
          </label>
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="block w-full h-12 px-10 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Repeat Password"
            required
          />
        </div>

        <button
          type="submit"
          className=" h-12 bg-gray-500 hover:bg-cyan-800 transition-all duration-700 rounded-full shadow-xs text-black text-base font-semibold leading-6 mb-6 px-10 "
        >
          Sign Up
        </button>

        <div>
          Already have an account? <Link to="/login" className="text-blue-950 font-bold">Login</Link>
        </div>
      </form>
    </div>
  );
}
export default Signup; 