import allBlogs from "../json/blogData.json";
import BlogList from "../components/BlogList.js";
import { useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState(allBlogs);

  function deleteBlog(id) {
    const newBlogs = blogs.filter(blog => blog.id != id);
    setBlogs(newBlogs);
  }

  return (
    <BlogList blogs={blogs} deleteBlog={deleteBlog}/>
  )
}

export default Blogs;