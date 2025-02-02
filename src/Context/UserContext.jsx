/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => 
{
    const navigate = useNavigate();
    const [authToken , setAuthToken] = useState( ()=>sessionStorage.getItem("token"));
    const [current_user, setCurrentUser] = useState(null);
    console.log("Current user",current_user)

// Functions Fetching 
// LOGIN 
    const login = (email, password) => 
        // loads for the data 
    {
        toast.loading("Logging you in ... ")
        fetch("https://collaborative-blog-backend.onrender.com/login",{
            method:"POST",
            headers: {
                'Content-Type':'application/json'
              },
            body: JSON.stringify({
                email, password
            })
        })
        .then((resp)=>resp.json())
        .then((response)=>{
            if(response.access_token){
                toast.dismiss()
                // set the session storage/ save it the token 
                sessionStorage.setItem("token", response.access_token);

                // set auth_token 
                setAuthToken(response.access_token)
                fetch("https://collaborative-blog-backend.onrender.com/current_user",{
                    method:"GET",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${response.access_token}`
                    }
                })
                .then((response) => response.json())
                .then((response) => {
                  if(response){
                    // saved as current user
                          setCurrentUser(response)
                        }
                });

                toast.success("Successfully Logged in")
                navigate("/profile")
            }
            else if(response.error){
                toast.dismiss()
                toast.error(response.error)

            }
            else{
                toast.dismiss()
                toast.error("Failed to login")

            }
         
        })
    };

    //Logout  
    const logout = () => 
    {
    // Remove the session storage 
    {sessionStorage.removeItem("token");
    setAuthToken(null)
    setCurrentUser(null)
                            }

    };

// // Fetch/ Get current user
//     useEffect(()=>{
//         fetchCurrentUser()
//     }, [])

    const fetchCurrentUser = () => 
    {
        console.log("Current user function ", authToken);
        
        fetch("https://collaborative-blog-backend.onrender.com/current_user",{
            method:"GET",
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${authToken}`
            }
        })
        .then((response) => response.json())
        .then((response) => {
          if(response){
           setCurrentUser(response)
          }
        });
    };


// "https://collaborative-blog-backend.onrender.com/users
    //Add User 
    const addUser = (name, email, password)=> 
    {

        toast.loading("Registering ... ")
        fetch("https://collaborative-blog-backend.onrender.com/users", {
            method:"POST",
            headers: {
                "Accept":"application/json",
                'Content-Type':'application/json'
              },
            body:JSON.stringify({name,email,password})
        })
        .then((resp)=>resp.json())
        .then((response)=>{
            console.log("Response from backend:",response);
            
            if(response.success){
                toast.dismiss();
                toast.success(response.success);
                navigate("/login")
            }
            else if(response.error){
                toast.dismiss();
                toast.error(response.error)}
            else{
                toast.dismiss()
                toast.error(response.error ||"Error during registration." )
            }              
        })   
        console.log("user", name);
    };

    // Update A User 
    const updateUser = () => 
    {
        console.log("Updating user:");
    };
    
    const deleteUser = async (userId) => 
    {
        console.log("Deleting user:", userId);
    };

    // call the functions 
  const data = {
    authToken,
    login,
    fetchCurrentUser,
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

