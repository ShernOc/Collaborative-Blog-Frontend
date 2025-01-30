import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const BlogContext = createContext();

function  BlogProvider({children}) {

    // initialize the state 
    const navigate = useNavigate();
    const {authToken} = useContext(UserContext);
    const [blogs, setBlogs] = useState([]);
    const [editors, setEditors] = useState([]);
    const [onChange, setOnchange] = useState(true);

// ================BLOGS==========================
 
// Fetch/Get  Blogs

    useEffect(()=>{
        fetch("https://collaborative-blog-backend.onrender.com/blogs",{
                method:"GET",
                headers: {
                    'Content-type': 'application/json',
                      Authorization: `Bearer ${authToken}`
                }
            })
            .then((response) => response.json())
            .then((response) => {
                setBlogs(response)
            });
   }, [onChange])
 
    // Add Todo
    const addBlog= ( title, content, is_published) => 
    {
       
                toast.loading("Adding a blog ... ")
                fetch("https://collaborative-blog-backend.onrender.com/blogs",{
                    method:"POST",
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${authToken}`
                      },
                    body: JSON.stringify({
                        title, content, is_published
                    })
                })
                .then((resp)=>resp.json())
                .then((response)=>{
                    console.log(response);
                    
                    if(response.success){
                        toast.dismiss()
                        toast.success(response.success)
                        setOnchange(!onChange)
                    }
                    else if(response.error){
                        toast.dismiss()
                        toast.error(response.error)
        
                    }
                    else{
                        toast.dismiss()
                        toast.error("Failed to add a blog")
        
                    }   
                })
 }
    
    
    const updateBlog = (title, content, is_published) => 
    {
        toast.loading("Updating blog ... ")
        fetch(`https://collaborative-blog-backend.onrender.com/blogs/${blog_id}`,{
            method:"PATCH",
            headers: {
                'Content-type': 'application/json',
              },
            body: JSON.stringify({
                title, content, is_published
            })
        })
        .then((resp)=>resp.json())
        .then((response)=>{
            console.log(response);
            
            if(response.success){
                toast.dismiss()
                toast.success("Blog updated Successfully")
                navigate("/profile")
            }
            else if(response.error){
                toast.dismiss()
                toast.error(response.error || "Something went wrong!" )
            }
            else{
                toast.dismiss()
                toast.error(response.error || "Unexpected Error Occurred!")
            }
               
        })
       
        console.log("Updating blog..");
    }


    //  Delete BLog
    const deleteBlog = (id) => 
    {
        toast.loading("Deleting Blog ... ")
        fetch(`https://collaborative-blog-backend.onrender.com/blogs/${blogId}`,{
            method:"DELETE",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${authToken}`
 
              }
        })
        .then((resp)=>resp.json())
        .then((response)=>{
            
            if(response.success){
                toast.dismiss()
                toast.success(response.success)
                setOnchange(!onChange)
                navigate("/login")
 
            }
            else if(response.error){
                toast.dismiss()
                toast.error(response.error || "Failed to delete blog!")
            }
            else{
                toast.dismiss()
                toast.error("Failed to delete")
            } 
            
        })
    }

// ================================ Editors =====================================

// fetch/ get editors
   useEffect(()=>{
        fetch("https://collaborative-blog-backend.onrender.com/editors", {
                method:"GET",
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((response) => {
            setEditors(response)
            });
   }, [])

   //Add An editor 
   const addEditors = (blog_id, user_id, role) => 
    {
        toast.loading("Registering an Editor... ")
        fetch("https://collaborative-blog-backend.onrender.com/editors",{
            method:"POST",
            headers: {
                'Content-type': 'application/json',
              },
            body: JSON.stringify({
                blog_id, user_id, role
            })
        })
        .then((resp)=>resp.json())
        .then((response)=>{
            console.log(response);
            
            if(response.msg){
                toast.dismiss()
                toast.success(response.success)
                navigate("/login")
            }
            else if(response.error){
                toast.dismiss()
                toast.error(response.error)

            }
            else{
                toast.dismiss()
                toast.error(response.error)
  }
               
        }) 
    };
// pass the tags

   const data = {
    editors,
    blogs,
    addBlog,
    updateBlog,
    deleteBlog,
    addEditors
  }


  return (
  <BlogContext.Provider value={data}>
      {children}
  </BlogContext.Provider>)
}
export default BlogProvider;