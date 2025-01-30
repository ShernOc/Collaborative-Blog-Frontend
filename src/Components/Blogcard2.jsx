import { useEffect, useState } from "react";
import axios from "axios";

const BlogCard2 = () => {
  const [blogs, setBlogs] = useState([]); // Initialize state as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/blogs") // Flask API endpoint
      .then(response => {
        console.log("Fetched blogs:", response.data); // Debugging
        setBlogs(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p><strong>Author:</strong> {blog.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogCard2;
