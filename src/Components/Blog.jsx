// import React from "react";
// import {useState, useEffect} from "react"


// const [blogs, setBlog] = useState = (0);

function Blog(){

    function handleClick(){
        console.log("click")
    }
    return (
    <>
    <h1>Blog Page</h1>
        <button onClick = {handleClick}>Click_me </button>
        </>
    )
}

export default Blog;