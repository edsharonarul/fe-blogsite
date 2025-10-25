import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar1";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogDetail from "./components/BlogDetail";
import Bloglist from "./pages/Bloglist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bloglist" element={<Bloglist />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
