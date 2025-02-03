import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export const CommContext = createContext();

export const CommProvider=({children}) =>{

    // initialize the state 
    const navigate = useNavigate()
    const { authToken } = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [onChange, setOnchange] = useState(true)

    // ================Comments==========================

    // Fetch/Get Comments
    useEffect(() => {
        fetch("http://127.0.0.1:5000/comments", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
            .then((response) => response.json())
            .then((response) => {
                setComments(response)
            });
    }, [onChange, authToken])

    // Add Comment
    const addComment = (blog_id, user_id, content) => {
        toast.loading("Adding a Comment ... ")
        fetch("http://127.0.0.1:5000/comments", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({
                content, user_id, blog_id
            })
        })
            .then((resp) => resp.json())
            .then((response) => {
                console.log(response);

                if (response.success) {
                    toast.dismiss()
                    toast.success(response.success)
                    setOnchange(!onChange)
                }
                else if (response.error) {
                    toast.dismiss()
                    toast.error(response.error)

                }
                else {
                    toast.dismiss()
                    toast.error("Failed to add a comment")
                }
            })
    }

    //  Update Comments 
    const updateComment = (content, user_id, blog_id, comment_id) => {
        toast.loading("Updating blog ... ")
        fetch(`http://127.0.0.1:5000/blogs/${comment_id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id, content, blog_id
            })
        })
            .then((resp) => resp.json())
            .then((response) => {
                console.log(response);

                if (response.success) {
                    toast.dismiss()
                    toast.success("Comment updated Successfully")
                    navigate("/profile")
                }
                else if (response.error) {
                    toast.dismiss()
                    toast.error(response.error || "Something went wrong!")
                }
                else {
                    toast.dismiss()
                    toast.error(response.error || "Unexpected error occurred!")
                }

            })

        console.log("Updating Comment..");
    }

    //  Delete Comment
    const deleteComment = (comment_id) => {
        toast.loading("Deleting Comment ... ")
        fetch(`http://127.0.0.1:5000/blogs/${comment_id}`, {
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
                    navigate("/login")

                }
                else if (response.error) {
                    toast.dismiss()
                    toast.error(response.error || "Failed to delete comment!")
                }
                else {
                    toast.dismiss()
                    toast.error("Failed to delete")
                }

            })
    }

    const data = {
        comments,
        addComment,
        updateComment,
        deleteComment,
    };

    return (
        <CommContext.Provider value={data}>
            {children}
        </CommContext.Provider>
    )
};


