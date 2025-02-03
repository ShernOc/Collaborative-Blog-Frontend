import { useState, useContext } from 'react';
import { BlogContext } from "../Context/BlogContext";
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';


function AddBlog() {
  const { addBlog } = useContext(BlogContext);
  const { current_user } = useContext(UserContext)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState('false');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // handle form submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Title and content are required");
      return;
    }
    //  If not current user/ you have to log in log in 
    if (!current_user) {
      setError("You need to be logged in to add a blog.");
      navigate("/dashboard");
      return;
    }

    // New blog creation 
    const newBlog = { title, content, author: current_user.name, isPublished };

    // calling the add blog from new blog
    addBlog(newBlog)
    // resets the form to a new page 
    setTitle("");
    setContent("");
    setIsPublished(false);
    setError(""); // Clear error message
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Add a New Blog</h2>

        {/* Error message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4" id='add_blogs'>
          {/* blog title  */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-zinc-600">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter blog title"
              required
            />
          </div>
          {/* content  */}
          <div>
            <label htmlFor="content" className="block text-lg font-medium text-gray-600">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Write your blog content here"
              rows="6"
              required
            ></textarea>
          </div>

          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="form-checkbox"
              />
              <span className="ml-2">Publish immediately</span>
            </label>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>

    </>);
};
export default AddBlog;