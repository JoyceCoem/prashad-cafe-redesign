import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ChatAgent from "./components/ChatAgent";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ChatAgent />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;