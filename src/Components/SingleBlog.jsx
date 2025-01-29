
import { Link } from "react-router-dom";

function SingleBlog(title,content,author){
    return (
        <>
        {/* Layout
        - Image: 
        Title
        - Author: User_id
        -Content 
        
        */}

        {/* image */}
        <div>
            <img src="frontend/public/images/code.jpg" alt={title} />
        </div>
        <div>
            {/* Title */}
            <h2>{content}</h2>
        </div>
        
        {/* author */}
        <div>
            <h3>{author}</h3>
        </div>
        <div>
            







        </div>
        
        
        
        </>
    )
}

export default SingleBlog;