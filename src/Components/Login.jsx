// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router';
// import { useAuth } from "./Signin";
// // import { Navigate } from 'react-router';

const Login = () => {
//   const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

// event onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/login')

  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-100
        px-2 py-1 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;