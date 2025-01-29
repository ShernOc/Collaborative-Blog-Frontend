import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

//This will show how we want the blogs need to be displayed. 
function Blogcard(){
    const {id } = useParams();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        axios.get(`/api/blog/${id}`).then((response) => {
          setBlog(response.data.blog);
          setComments(response.data.comments);
        });
      }, [id]);
    
      // Able to add comments 
      const addComment = () => {
        axios.post(`/api/comments`, { blogId: id, content: newComment }).then((response) => {
          setComments([...comments, response.data]);
          setNewComment('');
        });
      };

    return(

        <div id ="blogcard ">
            {blog && (
            <><h2 className ="font-semibold">{blog.title}</h2>
            <p className="mb-6">{blog.content}</p>
            <br />
            <h3 className= "text-xl font-semibold mb-2">Your Comments</h3>
            {comments.map((comment)=>(
                 <div key={comment.id} className="border p-2 mb-2 rounded">
                 <p>{comment.content}</p>
               </div>
            ))}
            <div className="mt-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              placeholder="Add your comment"
            />
            
            <button onClick={addComment} className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
            </div>
        </>
    )}
    </div>
    );
};

export default Blogcard;