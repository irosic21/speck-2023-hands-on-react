import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import ScrollToTop from "./ScrollToTop";
import CourseArticle from "./pages/CourseArticle/CourseArticle";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseArticle />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute redirectPath={"/"}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
