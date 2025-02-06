import { useEffect, useContext, useState } from "react";
import { BlogContext } from "../Context/BlogContext";
import { UserContext } from "../Context/UserContext";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { blogs,fetchBlogs} = useContext(BlogContext)||{};
  const {fetchCurrentUser, users, current_user} = useContext(UserContext);
  // const navigate = useNavigate();
  const  [loading, setLoading] = useState(false);

  
  //gets all the blogs available
  useEffect(() => {
    fetchBlogs();
    fetchCurrentUser()
  
  },[]);

  console.log(users,
    current_user,"current user",blogs)


  return (
    <div className=" bg-cyan-200  max-w-5xl mx-auto p-20">
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <>
          <br />
          <h1 className="text-3xl font-bold  mb-6">Blog</h1>

          {/* Profile */}
          {current_user && (
            <div className="bg-gray-900 shadow-lg rounded-3xl p-6 mb-6">
              <h2 className="text-3xl font-semibold mb-2 text-cyan-200">{current_user.name}</h2>
              <p className="text-zinc-300 text-2xl">{current_user.email}</p>
            </div>
          )}
          {/* All Blogs - Editable by Any User */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-6 p-3 ">All Blogs
            </h2>
          {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog.id} className="bg-gray-950 p-4 mb-4 rounded-3xl shadow">
                  {/* Allow the blog to link  */}
                  <Link to={`/oneblog/${blog.id}`}> 
                  <h3 className="text-3xl font-bold text-cyan-200">{blog.title}</h3>
                  </Link>
                  <p className="text-zinc-300">{blog.content.substring(0, 256)}...</p>
                  <p className="text-sm text-zinc-300">By {blog.user_id}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 font-bold">No blogs available <Link to = "/addblog"> !! Create a blog</Link></p>
            )}
          </section>
        </>)}
    </div>
  )
};

export default Dashboard;




