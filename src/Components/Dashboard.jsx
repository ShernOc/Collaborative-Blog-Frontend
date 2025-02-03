import { useEffect, useContext, useState } from "react";
import { BlogContext } from "../Context/BlogContext";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const { blogs, fetchBlogs, deleteBlog } = useContext(BlogContext);
  const { fetchCurrentUser } = useContext(UserContext);
  const { current_user } = useContext(UserContext);
  const navigate = useNavigate();
  const { loading } = useState(true);

  //gets all the blogs available
  useEffect(() => {
    fetchBlogs();
    fetchCurrentUser()
  }, []);


  return (
    <div className=" bg-cyan-200  max-w-5xl mx-auto p-6">
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <>
          <br />
          <h1 className="text-3xl font-bold  mb-6">Blogs</h1>

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
                  <h3 className="text-3xl font-bold text-cyan-200">{blog.title}</h3>
                  <p className="text-zinc-300">{blog.content.substring(0, 256)}...</p>
                  <p className="text-sm text-zinc-300">By {blog.name}</p>
                  <div className="flex gap-4 mt-2">
                    <button
                      onClick={() => navigate(`/edit_blog/${blog.id}`)}
                      className="text-cyan-300 text-2xl hover:underline"
                    >
                      Edit blog
                    </button>
                    {/* Delete Button - Only Blog Owner Can Delete */}
                    {current_user?.name === blog.name && (
                      <button
                        onClick={() => deleteBlog(blog.id)}
                        className="text-orange-400 hover:underline"
                      >
                        Delete
                      </button>)}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No blogs available.</p>
            )}
          </section>
        </>)}
    </div>
  )
};

export default Dashboard;
