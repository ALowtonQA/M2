import './App.css';
import allBlogs from './blogData.json';
import BlogList from './components/BlogList';
import { useState } from 'react';

function App() {

  const [blogs, setBlogs] = useState(allBlogs);

  function deleteBlog(id) {
    const filtered = blogs.filter(item => item.id !== id);
    setBlogs(filtered);
  }

  return ( 
    <div>
      <BlogList blogs={blogs} deleteBlog={deleteBlog}/>
    </div>
  );

}

export default App;

