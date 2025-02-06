import { useEffect, useContext, useState } from "react";
import { BlogContext } from "../Context/BlogContext";
import { UserContext } from "../Context/UserContext";
import { useNavigate,Link } from 'react-router-dom';

const Dashboard = () => {
  const { blogs,fetchBlogs} = useContext(BlogContext)|| {};
  const {current_user,fetchCurrentUser, users} = useContext(UserContext)|| {};
  const navigate = useNavigate();
  const { loading, setLoading} = useState(true);
  const [onChange, setOnChange] = useState(true);


  
  useEffect(() => {
      fetchBlogs();
    }, [onChange]);

  useEffect(() => {
    if (!current_user){
      fetchCurrentUser();
    };
    
  }, [fetchCurrentUser, current_user])

  //gets all the blogs available
  useEffect(() => {
    if(blogs && blogs.length>0 && loading){
      setLoading(false);
    }else{
      setLoading(true);
    } ;
  
  },[blogs, loading]);

  console.log(users,"current user",current_user, blogs)


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
          { users && blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog} className="bg-gray-950 p-4 mb-4 rounded-3xl shadow">
                  <h3 className="text-3xl font-bold text-cyan-200">{blog.title}</h3>
                  <p className="text-zinc-300">{blog.content.substring(0, 256)}...</p>
                  <p className="text-sm text-zinc-300">By {blog.user_id}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 font-bold">No blogs available <Link  to = "/addblog"> !! Create a blog</Link></p>
            )}
          </section>
        </>)}
    </div>
  )
};

export default Dashboard;




