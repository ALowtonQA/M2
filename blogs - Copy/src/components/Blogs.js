import BlogList from './BlogList';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

function Blogs() {
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:4000/blogs")
            .then((res) => {

                if (!res.ok) {
                    throw new Error("Could not get data for that resource.");
                }

                return res.json();
            }).then((data) => {
                setBlogs(data);
                setError(null);
                setIsLoading(false);
            }).catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    function deleteBlog(id) {
        const filtered = blogs.filter(item => item.id !== id);
        setBlogs(filtered);
    }

    return (
        <div>
            {error && <div> {error} </div>}
            {isLoading && <Spinner />}
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
        </div>
    );
}

export default Blogs;