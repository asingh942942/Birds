import "./App.css";
import Home from "./pages/Home.js";
import Bullfinch from "./pages/PlushCrestedJay";
import HyacinthMacaw from "./pages/HyacinthMacaw";
import SummerTanager from "./pages/SummerTanager";
import RedSiskin from "./pages/RedSiskin";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bullfinch" element={<Bullfinch />} />
        <Route path="/macaw" element={<HyacinthMacaw />} />
        <Route path="/tanager" element={<SummerTanager />} />
        <Route path="/siskin" element={<RedSiskin />} />
      </Routes>
      <Footer />
    </Router>
  );
}
