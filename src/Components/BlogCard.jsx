import { useEffect, useState,useContext } from "react";
import {BlogContext} from '../Context/BlogContext';
import {CommContext} from '../Context/CommContext';

//This will show how we want the one blog page to look like need to be displayed. 

function BlogCard(){
  // pass the functions 
  // const { editors } = useContext(UserContext);
  const {blog,blog_id} = useContext(BlogContext); 
  const { comments, addComment, fetchComments } = useContext(CommContext);

    const [newComment, setNewComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


  // Fetch comments for this blog when blog is posted
  useEffect(() => {
    setLoading(true);
    fetchComments(blog_id) // Fetch comments for the blog
      .then(() => setLoading(false))
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [blog_id, fetchComments]);

  // Handle adding new comment
  const addCommentHandler = () => {
    if (newComment.trim()) {
      addComment(blog_id, { content: newComment });
      setNewComment(""); // Clear the textarea
    }
  };

  return (
    <>
    <div id="blogcard" className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Image */}
      <img
        className="mb-5 h-[720px] w-full bg-no-repeat object-cover object-center"
        src="./images/code.jpg"
        alt="hands on a computer"
      />

      <div className="mr-20 flex w-full max-w-3xl flex-col justify-start md:w-3/4">

        {/* Loading & Error Messages */}
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Displaying the Blog */}
        {blog ? (
          <>
            <h3 className="font-semibold text-2xl mb-2">{blog.title}</h3>
            <p className="mb-4">{blog.content}</p>
            <p className="font-medium">Author: {blog.name}</p>
          </>
        ) : (
          <p className="font-bold">No blog available</p>
        )}
      </div>

      <hr className="w-full border-t border-zinc-300 pb-8 dark:border-zinc-700" />

      {/* Comments Section */}
      <h3 className="text-xl font-semibold mb-2">Your Comments</h3>
      <div className="space-y-2">
        {comments.map((comment) => (
          <div key={comment.id} className="border p-2 mb-2 rounded">
            <p>{comment.content}</p>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <div className="mt-2">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="Add your comment"
        />
        <button
          onClick={addCommentHandler}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
    </> );
    
 } 

export default BlogCard;
