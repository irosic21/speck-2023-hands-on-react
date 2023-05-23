import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import ScrollToTop from "./ScrollToTop";
import CourseArticle from "./pages/CourseArticle/CourseArticle";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header
        isAdmin={isAdmin}
        isLoggedIn={isLoggedIn}
        setIsAdmin={setIsAdmin}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseArticle />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute redirectPath={"/"} state={isAdmin}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <SignIn setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
