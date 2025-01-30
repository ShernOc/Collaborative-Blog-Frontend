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
                  Writing is an art, a way of expressing your thoughts freely. Wether you are a programmer, storyteller,or just you, remember that every word matters. Hope On!!  
                </p>
    
                <button onClick={() => navigate("/signup")} className="bg-blue-900 hover:bg-cyan-700 text-white px-3 py-3 rounded-lg text-lg font-semibold">Signup</button>
            </div>
            </>
          );
        }

export default Home;

//             {/* <div className="flex items-center p-10 text-cyan-100 justify-items-center"> */}
//                 <h1>Main page</h1>

//             <img className = "w-80 h-64 object-cover rounded-2xl "   src="" alt="Computer Code"/>

            <p className="ml-10 text-right text-lg  font-semibold text-white">&quot;Programming is not about what you know; it is about what you can figure out.&quot;</p>
            {/* </div>  */}


