// import Home from "./page/home"
import Home from "./page/home"
import { BrowserRouter as  Router, Routes, Route, BrowserRouter, Link } from "react-router-dom";
import About from "./page/about"
import Project from "./page/project"

const App = () => {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/#contact" element={<Home />} />
      </Routes>
  </Router>
  );
};

export default App;
