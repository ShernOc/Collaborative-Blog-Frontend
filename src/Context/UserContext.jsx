import { createContext, useEffect, useState } from "react";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => 
{
    const navigate = useNavigate()
    const [authToken , setAuthToken] = useState(()=> sessionStorage.getItem("token"));
    const [users, setUsers] = useState([]);
    const [current_user, setCurrentUser] = useState(null);
    const [onChange, setOnChange] = useState(true);


    console.log("Current user ",current_user)


    // LOGIN
    const login = (email, password) => 
    {
        toast.loading("Logging you in ... ")
        fetch("https://collaborative-blog-backend.onrender.com/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                email, password
            })
        })
        .then((resp)=>resp.json())
        .then((response)=>{
            if(response.access_token){
                toast.dismiss()

                sessionStorage.setItem("token", response.access_token);

                setAuthToken(response.access_token)

                fetch('https://collaborative-blog-backend.onrender.com/current_user',{
                    method:"GET",
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${response.access_token}`
                    },
                })
                .then((response) => response.json())
                .then((response) => {
                  if(response.email){
                          setCurrentUser(response)
                        }
                });

                toast.success("Successfully Logged in")
                navigate("/dashboard");
            }
            else if(response.error){
                toast.dismiss()
                toast.error(response.error);

            }
            else{
                toast.dismiss()
                toast.error("Failed to login")

            }        
        })
    };

    // console.log(login("sherlyne@gmail.com","1234"))

  

    const logout = () => 
    {

        toast.loading("Logging out ... ")
        fetch("https://collaborative-blog-backend.onrender.com/logout",{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
              },
       
        })
        .then((resp)=>resp.json())
        .then((response)=>{
           console.log(response);
           
            if(response.success)
            {
                sessionStorage.removeItem("token");
                setAuthToken(null);
                setCurrentUser(null);

                toast.dismiss();
                toast.success("Successfully L.ogged out");
                navigate("/");
            }
        })
    };

    // Fetch current user
    useEffect(()=>{
        if (!authToken){
            fetchCurrentUser();
        }
        
    }, [authToken])
    
    console.log("Current user function",authToken);
        
    const fetchCurrentUser = () => 
    {
    
    fetch('https://collaborative-blog-backend.onrender.com/current_user',{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
        .then((response) => response.json())
        .then((response) => {
          if(response.email){
           setCurrentUser(response);
          }
        });
    };

    // Fetch all users 
    useEffect(() => {
        fetch("https://collaborative-blog-backend.onrender.com/users", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            setUsers(response);
            // console.log(response)
          });
      }, []);
    

    // ADD user
    const addUser = (name, email, password) => 
    {
        toast.loading("Registering ... ")
        fetch("https://collaborative-blog-backend.onrender.com/users",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                name, email, password
            })
        })
        .then((resp)=>resp.json())
        .then((response)=>{
            
            console.log(response);
            
            if(response.success){
                toast.dismiss()
                toast.success(response.msg || "User added Successfully")
                navigate("/dashboard")
            }
            else if(response.error){
                toast.dismiss();
                toast.error(response.error)
            }
            else{
                toast.dismiss();
                toast.error("You are already registered! Login")
            } })
};


    const updateUser = (name, email, password) => {
            toast.loading("Updating ... ")
            fetch("https://collaborative-blog-backend.onrender.com/users/update", {
                method: "PATCH",
                mode:"cors",
                headers: {
    
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`
    
                },
                body: JSON.stringify({ name, email, password })
            })
                .then((resp) => resp.json())
                .then((response) => {
                    console.log("Response from backend:", response);
    
                    if (response.success) {
                        toast.dismiss();
                        toast.success("User updated Successfully");
                        navigate("/login")
                    }
                    else if (response.error) {
                        toast.error(response.error||"Failed to update your profile")
                    }
                    else {
                        toast.error(response.error || "Error during registration.")
                        alert("User not Updated")
                    }
                })
            console.log("user", name);
        };
    
    
        //  Delete User
        const deleteUser = (user_id) => {
            toast.loading("Deleting User ... ")
            fetch(`https://collaborative-blog-backend.onrender.com/blogs/${user_id}/delete`, {
                method: "DELETE",
                mode:"cors",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`
    
                }
            })
                .then((resp) => resp.json())
                .then((response) => {
    
                    if (response.success) {
                        toast.dismiss()
                        toast.success(response.success)
                    }
    
                    else if (response.error) {
                        toast.dismiss()
                        toast.error(response.error || "Failed to delete blog!")
                    }
                    else {
                        toast.dismiss()
                        toast.error("Failed to delete")
                    }
    
                })
            console.log("Deleting user:", user_id);
        };

// Update the User

  const data = {
    authToken,
    fetchCurrentUser,
    users,
    current_user,
    login,
    logout,
    addUser,
    updateUser,
    deleteUser,
  };

  return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
};


