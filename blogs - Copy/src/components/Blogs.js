import BlogList from './BlogList';
import { useEffect, useState } from 'react';

function Blogs() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/blogs")
            .then((res) => {
                return res.json();
            }).then((data) => {
                setBlogs(data);
            });
    }, []);

    function deleteBlog(id) {
        const filtered = blogs.filter(item => item.id !== id);
        setBlogs(filtered);
    }

    return (
        <div>
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
        </div>
    );
}

export default Blogs;