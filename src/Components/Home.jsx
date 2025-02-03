import { Link } from "react-router-dom";


function Home() {

  return (
    <>
      <div className=" min-h-screen  flex items-center justify-center p-6 ">
        <div className=" rounded-4xl bg-gray-500 flex flex-wrap justify-center ">

          <h1 className="text-4xl font-bold text-black mb-4">
            What Can You Write ?
          </h1>
          <p className="text-black-400 text-lg mb-6 font-semibold">
            Welcome to <span className="font-bold text-2xl">Collaborative Blog Platform</span>, a platform where
            Writing is an art, a way of expressing your thoughts freely. Wether you are a programmer, storyteller, remember that every word counts. So, Join Me.
          </p>
          <Link to="/signup">
            <button type="button" className=" block md:hover:bg-gray-300 bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-semibold rounded-3xl px-3 py-2 text-center ">Signup</button> </Link>
        </div>

      </div>
    </>
  );
}

export default Home;




