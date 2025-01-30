import { useState } from "react";
import { useBlog } from "../context/BlogContext";


const CreateBlog= () => {
  const { addBlog } = useBlog();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Title and Content are required!");
      return;
    }

    addBlog({ title, content, is_published: isPublished });
    setTitle("");
    setContent("");
    setIsPublished(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Content Textarea */}
        <textarea
          placeholder="Write your blog content here..."
          className="w-full p-2 border rounded"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {/* Is Published Checkbox */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={() => setIsPublished(!isPublished)}
          />
          <span>Publish Now</span>
        </label>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog