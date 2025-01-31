import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
    return (
        <> 
            <div className="min-h-screen flex flex-col items-center justify-center p-6 ">
              <div className ="bg-[url(/frontend/public/images/code.jpg)]"></div>
                <h1 className="text-4xl font-bold text-gray-600 mb-4">
                    What Can You Write ? 
                </h1>
                <p className="text-zinc-400 text-lg mb-6  bg-gradient-to-tr">
                Welcome to <span className="font-bold text-2xl">Collaborative Blog Platform</span>, a platform where 
                  Writing is an art, a way of expressing your thoughts freely. Wether you are a programmer, storyteller, remember that every word counts. So, Join Me. 
                </p>
                <button onClick={() => navigate("/signup")} className="bg-blue-900 hover:bg-cyan-700 text-white px-3 py-3 rounded-lg text-lg font-semibold">Signup</button>
            </div>
            </>
          );
        }

export default Home;




