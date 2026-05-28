import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useLayoutEffect } from "react";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import BlogAdmin from "./components/BlogAdmin";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.replace("#", ""));

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin/blog" element={<BlogAdmin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
