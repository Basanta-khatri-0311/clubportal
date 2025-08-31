import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
