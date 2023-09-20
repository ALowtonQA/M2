import BlogList from "../components/BlogList.js";
import { useState, useEffect } from "react";
import Spinner from "./Spinner.js";

function Blogs() {
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => {
                return res.json();
            }).then(data => {
                setBlogs(data);
                setError(null);
                setisLoading(false);  
            }).catch();
    }, []);

  function deleteBlog(id) {
    const newBlogs = blogs.filter(blog => blog.id != id);
    setBlogs(newBlogs);
  }

  return (
    <>
        {error && <div> {error} </div>}
        {isLoading && <Spinner/>}
        {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog}/>}
    </>
  )
}

export default Blogs;