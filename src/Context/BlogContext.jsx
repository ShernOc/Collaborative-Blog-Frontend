import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {UserContext} from './UserContext'
import { useNavigate } from "react-router-dom";


export const BlogContext = createContext();

export const BlogProvider = ({children}) => {

    // initialize the state 
    const navigate = useNavigate();
    const {authToken} = useContext(UserContext);
    const [blogs, setBlogs] = useState([]);
    const [editors, setEditors] = useState([]);
    const [onChange, setOnchange] = useState(true);

// ================BLOGS==========================
// Fetch/Get Blogs

// const fetchBlogs = async (){ 
//         if (!authToken) return;
//         try{
//              const response = await fetch("https://collaborative-blog-backend.onrender.com/blogs",{
//                     method:"GET",
//                     headers: {
//                         'Content-type': 'application/json',
//                           Authorization: `Bearer ${authToken}`
//                     },
//                 }) ;
//                 .then((response) => response.json())
//                 .then((response) => {
//                     setBlogs(response)
//                 });
//        }, [onChange,authToken] }
    
    useEffect(()=>{
        // no token no blog 
        if (!authToken) return;
        fetch("https://collaborative-blog-backend.onrender.com/blogs",{
                method:"GET",
                headers: {
                    'Content-Type':'application/json',
                      Authorization: `Bearer ${authToken}`
                }
            })
            .then((response) => response.json())
            .then((response) => {
                setBlogs(response)
            });
   }, [onChange,authToken])


// Add Blog
    const addBlog= ( title, content, is_published) => 
    {
       
        toast.loading("Adding a blog ... ")
        fetch("https://collaborative-blog-backend.onrender.com/blogs",{
            method:"POST",
            headers: {
            'Content-Type': 'application/json',
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
                toast.success(response.success);
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
    
 //Update Blog
    const updateBlog = ( blog_id, title, content, is_published) => 
    {
        toast.loading("Updating blog ... ")
        fetch(`https://collaborative-blog-backend.onrender.com/blogs/update/${blog_id}`,{
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json',
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
    const deleteBlog = (blog_Id) => 
    {
        toast.loading("Deleting Blog ... ")
        fetch(`https://collaborative-blog-backend.onrender.com/blogs/delete/${blog_Id}`,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
 
              }
        })
        .then((resp)=>resp.json())
        .then((response)=>{
            
            if(response.success){
                toast.dismiss()
                toast.success(response.success)
                setOnchange(!onChange)
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
    // no token no blog 
    if (!authToken) return;
    fetch("https://collaborative-blog-backend.onrender.com/editors",{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                  Authorization: `Bearer ${authToken}`
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setEditors(response)
        });
}, [onChange,authToken])


   //Add An editor 
   const addEditors = (blog_id, user_id, role) => 
    {
        toast.loading("Registering an Editor... ")
        fetch("https://collaborative-blog-backend.onrender.com/editors",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
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
                navigate("/dashboard")
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

//Add An editor 
   const addEditors_id = (blog_id, user_id, role, editor_id) => 
    {
        toast.loading("Registering an Editor... ")
        fetch(`https://collaborative-blog-backend.onrender.com/editors/${editor_id}`,{
            method:"GET",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${authToken}`
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
                navigate("/dashboard")
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
  
// Update an Editor

const updateEditor = (blog_id, user_id, role, editor_id) => 
    {
        toast.loading("Updating blog ... ")
        fetch(`https://collaborative-blog-backend.onrender.com/blogs/editors/${editor_id}`,{
            method:"PATCH",
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${authToken}`
              },
            body: JSON.stringify({
                blog_id, user_id, role
            })
        })
        .then((resp)=>resp.json())
        .then((response)=>{
        // setOnchange(!onChange)
            console.log(response);
            
            if(response.success){
                toast.dismiss()
                toast.success("Editor updated Successfully")
                navigate("/dashboard")
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
       
        console.log("Updating editor..");
    }

    // Delete Editor
    const deleteEditor = (blog_Id, user_id) => 
        {
            toast.loading("Deleting Editor ... ")
            fetch(`https://collaborative-blog-backend.onrender.com/blogs/delete/${blog_Id/user_id}`,{
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
                }
    
                else if(response.error){
                    toast.dismiss()
                    toast.error(response.error || "Failed to delete editor!")
                }
                else{
                    toast.dismiss()
                    toast.error("Failed to delete")
                } 
                
            })
        }





// pass the tags

   const data = {
    editors,
    blogs,
    addBlog,
    updateBlog,
    deleteBlog,
    addEditors,
    addEditors_id,
    updateEditor,
    deleteEditor
  }

  return (
  <BlogContext.Provider value={data}>
      {children}
  </BlogContext.Provider>)
}
export default BlogProvider;