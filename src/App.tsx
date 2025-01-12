import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Korea from "./pages/Korea";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="p-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/korea" element={<Korea />} />
      </Routes>
    </div>
  );
}

export default App;
