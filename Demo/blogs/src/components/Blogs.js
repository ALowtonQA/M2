import BlogList from "../components/BlogList.js";
import { useState, useEffect } from "react";

function Blogs() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => {
                return res.json();
            }).then(data => {
                setBlogs(data);
            });
    }, []);

  function deleteBlog(id) {
    const newBlogs = blogs.filter(blog => blog.id != id);
    setBlogs(newBlogs);
  }

  return (
    <>
        {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog}/>}
    </>
  )
}

export default Blogs;