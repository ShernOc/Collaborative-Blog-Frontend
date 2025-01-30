// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// // import {Link} from 'react-router-dom'

// //This will show how we want the blogs need to be displayed. 
// function Blogcard(){
//     // const {id } = useParams();
//     const [blog, setBlog] = useState([]);
//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState('');
//     const [loading, setLoading] = useState(true); // Loading state
//     const [error, setError] = useState(null); // Error state

//     useEffect(() => {
//       axios.get(`http://127.0.0.1:5000/blogs`)
//       .then((response) => {
//         console.log("Fetched blogs:", response.data) // debugging
//           setBlog(Array.isArray(response.data)? response.data:[]);
//           setLoading(false);
//           setComments(response.data.comments);
//         })
//         .catch(error => {
//           console.error("Error fetching blogs:", error);
//           setError("Failed to load blogs");
//           setLoading(false);
//         });
//       }, []);

//     // useEffect(() => {
//     //   fetch("http://127.0.0.1:5000")  // Ensure Flask backend is running
//     //     .then(response => {
//     //       if (!response.ok) {
//     //         throw new Error("Network response was not ok");
//     //       }
//     //       return response.json();
//     //     })
//     //     .then(data => {
//     //       console.log("Fetched users:", data); // Debugging
//     //       setUsers(Array.isArray(data) ? data : []);
//     //     })
//     //     .catch(error => console.error("Error fetching users:", error));
//     // }, []);
    
//       // Able to add comments 
//       const addComment = () => 
//         {
//         axios.post(`/api/comments`, { blogId: id, content: newComment }).then((response) => {
//           setComments([...comments, response.data]);
//           setNewComment('');
//         });
//       };


//     return(
//       <>
//       <div id ="blogcard "> 
//           {blog && (
//             <>
//             {/* image */}
//           <img  width={1400}
//           // height={720}
//           className="mb-5 h-[720px] w-full bg-no-repeat object-cover object-center"
//           src='./images/code.jpg'
//           alt='hands on a computer'
//           />

//         <div  className="mr-20 flex w-full max-w-3xl flex-col justify-start md:w-3/4">
//         {/* <h2 className ="font-semibold" >{blog.title}
//           Title of The blog
//         </h2> */}

//         {loading && <p>Loading...</p>}
//         {error && <p style={{ color: "red" }}>{error}</p>}

//         {blog.length === 0 ? (
//         <p>No blogs available</p>
//       ) : (
//         <ul>
//           {blog.map(blog => (
//             <li key={blog.id} >
//               <h3 className='font-semibold'> Title of Blog {blog.title} </h3>
//               <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iusto saepe tempora consequatur, reiciendis natus suscipit similique quidem praesentium neque culpa minima quisquam, beatae cupiditate dolor asperiores doloribus nobis harum.
//               {blog.content}</p>
//               <p><strong>Author:</strong> {blog.author}</p>
//             </li>
//           ))}
//         </ul>
//       )}

//         </div >
//         <div className="flex flex-col justify-between space-y-4 pb-8 md:flex-row md:space-y-0">
//           <div className="flex items-center space-x-2 text-zinc-500 md:space-y-0 dark:text-zinc-400">
//             Author: Sherlyne Ochieng 
//           </div>
//         </div>

//         <hr className="w-full border-t border-zinc-300 pb-8 dark:border-zinc-700" />
        
//         <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum iusto non! Delectus, esse iste vel dolorum reiciendis rerum, natus amet, corporis minima fugiat odio vero sed excepturi error suscipit?
//           {blog.content}</p>
//             <br />

//       {/* comments section */}

//         <h3 className= "text-xl font-semibold mb-2">
//           Your Comments</h3>
//             {comments.map((comment)=>(
//                  <div key={comment.id} className="border p-2 mb-2 rounded">
//                  <p>{comment.content}</p>
//                </div>
//             ))}

//             <div className="mt-2">
//             <textarea
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="w-full p-2 border rounded mb-2"
//               placeholder="Add your comment"
//             />

//             <button onClick={addComment} className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
//             </div>
//         </>
//     )}
//     </div> 
//       </>

//     );
// };
// export default Blogcard;