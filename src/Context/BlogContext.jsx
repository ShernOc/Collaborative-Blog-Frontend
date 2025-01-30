import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const BlogContext = createContext();

function  BlogProvider({ children }) {

    // initialize the state 
    const navigate = useNavigate()
    const {authToken} = useContext(UserContext)
    
    const [blogs, setBlogs] = useState([])
    const [editors setEditors] = useState([])
    const [comments  setComments] = useState([])


    const [onChange, setOnchange] = useState(true)

// ================================ BLOGS====================================
 
    // Fetch Blogs
    useEffect(()=>{
        fetch('https://todo-flask-65o6.onrender.com/todos',{
                method:"GET",
                headers: {
                    'Content-type': 'application/json',
                      Authorization: `Bearer ${authToken}`
                }
            })
            .then((response) => response.json())
            .then((response) => {
                setTodos(response)
            });
   }, [onChange])
 
 
    // Add Todo
    const addTodo = ( title, description, deadline, tag_id ) => 
    {
       
                toast.loading("Adding todo ... ")
                fetch("https://todo-flask-65o6.onrender.com/todo/add",{
                    method:"POST",
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${authToken}`
 
                      },
                    body: JSON.stringify({
                        title, description, deadline, tag_id
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
                        toast.error("Failed to add")
        
                    }
                  
                    
                })
 }
    
    
 
 
 
    const updateTodo = () => 
    {
        console.log("Updating todo");
    }
 
    const deleteTodo = (id) => 
    {
        toast.loading("Deleting todo ... ")
        fetch(`https://todo-flask-65o6.onrender.com/todo/${id}`,{
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
                navigate("/")
 
            }
            else if(response.error){
                toast.dismiss()
                toast.error(response.error)
 
            }
            else{
                toast.dismiss()
                toast.error("Failed to delete")
 
            }
          
            
        })
    }
 
 
 
    
  const data = {
    todos,
    tags,
 
    addTodo,
    updateTodo,
    deleteTodo,
  }
    
// ================================ TAGS =====================================
   useEffect(()=>{
        fetch('https://todo-flask-65o6.onrender',{
                method:"GET",
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((response) => {
            setTags(response)
            });
   }, [])
   



  return (
  <BlogContext.Provider value={data}>
      {children}
  </BlogContext.Provider>)
}
export default BlogProvider;