import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";

const OneBlog = () => {
  const { blogs } = useContext(BlogContext);
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const foundBlog = blogs.find((b) => b.id === parseInt(id));
      setBlog(foundBlog);
    }
  }, [blogs, id]);

  if (!blog) return <p className="text-center mt-10">Loading blog...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
      <p className="text-gray-700 mt-4">{blog.content}</p>
      <p className="text-sm text-gray-500 mt-6">By User {blog.user_id}</p>
    </div>
  );
};

export default OneBlog;
