import './App.css';
import Blogs from './Blogs';
import QAPics from './QAPics';
import NotFound from './NotFound';
import NewBlog from './NewBlog';
import MainNavigation from './MainNavigation';
import { Routes, Route } from 'react-router-dom';
import {useState } from 'react';
import { AppContext } from './context';

function App() {
  const [theme, setTheme] = useState("spring");
  return (
    <div>
      <AppContext.Provider value={{ theme }}>
        <MainNavigation />
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/new" element={<NewBlog />} />
          <Route path="/qa/pics/:id" element={<QAPics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;