
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import ScrollToTop from "./ScrollToTop";
import CourseArticle from "./pages/CourseArticle/CourseArticle";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/Courses" element={<Courses/>} />
          <Route path="/Courses/:id" element={<CourseArticle/>} />
        </Routes>
        <ScrollToTop/>
      </main>
    </>
  );
};

export default App;
