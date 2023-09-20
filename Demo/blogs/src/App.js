import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";

function App() {
  
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Blogs />} />
        {/* <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/qa/pics/:id" element={<QAPics />} /> */}
        <Route path="*" element={<NotFound />} />
		  </Routes>
    </>
  )
}

export default App;
