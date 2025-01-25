import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Korea from "./pages/Korea";
import Navbar from "./components/Navbar";
import Footer from "@components/Footer";

function App() {
  return (
    <div>
      <Navbar className="pt-10 px-10 mobile:px-4" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/korea" element={<Korea />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
