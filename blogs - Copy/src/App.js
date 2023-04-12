import './App.css';
import allBlogs from './blogData.json';
import BlogList from './components/BlogList';

function App() {
  return ( 
    <div>
      <BlogList blogs={allBlogs}/>
    </div>
  );

}

export default App;

