

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import Services from "./components/service";
import NotFound from "./components/notfound";

function About() {
  return <h1>Bu biz haqimizda sahifa</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Bosh sahifa</Link> |{" "}
        <Link to="/about">Biz haqimizda</Link> |{" "}
        <Link to="/contact">Aloqa</Link> |{" "}
        <Link to="/services">Xizmatlar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}





export default App; 




