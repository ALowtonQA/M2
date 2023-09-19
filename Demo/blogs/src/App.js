import allBlogs from "./json/blogData.json";
import BlogList from "./components/BlogList.js";

function App() {
  return (
    <BlogList blogs={allBlogs}/>
  )
}

export default App;
