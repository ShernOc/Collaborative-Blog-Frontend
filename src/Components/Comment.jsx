import { useState } from "react";





function Comment(){
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Comment submitted");
      }

    return (
        <>
        <div><h1>Comments Page</h1>

        {/* Form submission for the comment */}
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button>Login</button>
    </form>


            </div>
        </>

    )
}

export default Comment;