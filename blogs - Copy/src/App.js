import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import QAPics from './components/QAPics';
import NewBlog from './components/NewBlog';

function App() {
  return(
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Blogs/>} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/new" element={<NewBlog />} />
        <Route path="/qa/pics/:id" element={<QAPics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;