import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  // handle logout
  const handleLogout = () => {
    logout(); // Call context logout function
    navigate("/");
  };


  return (
    <button type="button" onClick={handleLogout} className=" block md:hover:bg-cyan-100 bg-gray-500 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-semibold rounded-3xl px-3 py-2 text-center ">Logout</button>

  );
}

export default Logout;
