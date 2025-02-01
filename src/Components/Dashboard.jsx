import { useEffect, useContext } from "react";
import { BlogContext} from "../Context/BlogContext";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { blogs, fetchBlogs, deleteBlog } = useContext(BlogContext);
  const { current_user } = useContext(UserContext);
  const navigate = useNavigate();

  //gets all the blogs available
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className=" bg-yellow-100  max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>

      {/* Profile Section */}
      {current_user && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-2">{current_user.name}</h2>
          <p className="text-gray-600">{current_user.email}</p>
        </div>
      )}

      {/* All Blogs - Editable by Any User */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="bg-white p-4 mb-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-700">{blog.content.substring(0, 100)}...</p>
              <p className="text-sm text-gray-500">By {blog.author}</p>
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => navigate(`/edit_blog/${blog.id}`)}
                  className="text-blue-600 hover:underline"
                >
                  Edit blog
                </button>
                {/* Delete Button - Only Blog Owner Can Delete */}
                {current_user?.name === blog.author && (
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button> )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No blogs available.</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
