import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useSesessionStorage from 'use-session-storage-state';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    const [authToken, setAuthToken] = useState(() => useSesessionStorage.getItem("token"))
    const [current_user, setCurrentUser] = useState('');
    const [onChange, setOnchange] = useState(null)

    console.log("Current user", current_user)

    // Functions Fetching 
    // LOGIN 
    const login = (email, password) =>
    // loads for the data 
    {
        toast.loading("Logging you in ... ")
        fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })
            .then((resp) => resp.json())
            .then((response) => {
                if (response.access_token) {
                    toast.dismiss()
                    // set the session storage/ save it the token 
                    sessionStorage.setItem("token", response.access_token);

                    // set auth_token 
                    setAuthToken(response.access_token)
                    setTimeout(() => {
                        fetch("http://127.0.0.1:5000/current_user", {
                            method: "GET",
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${response.access_token}`
                            }
                        })
                            .then((response) => response.json())
                            .then((response) => {
                                if (response) {
                                    // saved as current user
                                    setCurrentUser(response)
                                }
                            });
                    }, 500); // set session storage 

                    toast.success("Successfully Logged in")
                    navigate("/dashboard")
                }
                else if (response.error) {
                    toast.dismiss()
                    toast.error(response.error || "Failed to login ")

                }
                else {
                    toast.dismiss()
                    toast.error("Failed to login")

                }
            })
    };

    //Logout  
    const logout = () => {
        // Remove the session storage 
        {
            sessionStorage.removeItem("token");
            setAuthToken(null)
            setCurrentUser(null)
        }

    };

    // Fetch/ Get current user
    useEffect(() => {
        if (authToken) fetchCurrentUser();
    }, [authToken])

    const fetchCurrentUser = () => {
        console.log("Current user function ", authToken);

        fetch("http://127.0.0.1:5000/current_user", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
            .then((response) => response.json())
            .then((response) => {
                if (response) {
                    setCurrentUser(response)
                }
            });
    };

    // "https://collaborative-blog-backend.onrender.com/users


    //Add User 
    const addUser = (name, email, password) => {

        toast.loading("Registering ... ")
        fetch("http://127.0.0.1:5000/users", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then((resp) => resp.json())
            .then((response) => {
                console.log("Response from backend:", response);

                if (response.success) {
                    toast.dismiss();
                    toast.success(response.success);
                    navigate("/login")
                }
                else if (response.error) {
                    toast.dismiss();
                    toast.error(response.error)
                }
                else {
                    toast.dismiss()
                    toast.error(response.error || "Error during registration.")
                }
            })
        console.log("user", name);
    };

    // Update A User

    const updateUser = (name, email, password) => {

        toast.loading("Updating ... ")
        fetch("http://127.0.0.1:5000/users/update", {
            method: "PATCH",
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
                    toast.success(response.success);
                    navigate("/profile")
                }
                else if (response.error) {
                    toast.dismiss();
                    toast.error(response.error)
                }
                else {
                    toast.dismiss()
                    toast.error(response.error || "Error during registration.")
                }
            })
        console.log("user", name);
    };

    //  Delete User
    const deleteUser = (user_id) => {
        toast.loading("Deleting User ... ")
        fetch(`http://127.0.0.1:5000/blogs/${user_id}/delete`, {
            method: "DELETE",
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
                    setOnchange(!onChange)
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

