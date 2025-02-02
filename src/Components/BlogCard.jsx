import { useEffect, useState, useContext } from "react";
import { CommContext } from "../Context/CommContext";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const { comments, addComment, fetchComments } = useContext(CommContext);

  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch comments when blog is available
  useEffect(() => {
    if (!blog?.id) return;
    setLoading(true);
    fetchComments(blog.id)
      .then(() => setLoading(false))
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [blog?.id, fetchComments]);

  // Handle adding a new comment
  const addCommentHandler = () => {
    if (newComment.trim() && blog?.id) {
      addComment(blog.id, { content: newComment });
      setNewComment(""); // Clear input field
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-cyan-200 shadow-lg rounded-lg mt-10">
      {/* Loading & Error Messages */}
      {loading && <p>Loading comments...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Blog Content */}
      {blog ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Your Blog</h1>
          <h3 className="text-3xl font-bold text-cyan-900">{blog.title}</h3>
          <p className="mb-4 text-gray-700">{blog.content.substring(0, 256)}...</p>
          <p className="font-medium text-gray-600">Author: {blog.name}</p>
        </>
      ) : (
        <>
          <p className="font-bold text-red-500">No blog available!</p>
          <Link to="/addblog">
            <p className="font-bold text-blue-600 underline">Create a Blog</p>
          </Link>
        </>
      )}

      <hr className="w-full border-t border-gray-300 my-6" />

      {/* Comments Section */}
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Comments</h3>
      {comments.length > 0 ? (
        <div className="space-y-3 bg-gray-100 p-4 rounded-lg">
          {comments.map((comment) => (
            <div key={comment.id} className="border p-3 rounded bg-white">
              <p className="text-gray-800">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}

      {/* Comment Form */}
      <div className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-600"
          placeholder="Add your comment..."
        />
        <button
          onClick={addCommentHandler}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
