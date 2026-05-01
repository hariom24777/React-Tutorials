import { BrowserRouter, Routes, Route } from "react-router-dom";
import Documentation from "./components/Documentation";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Practice from "./pages/Practice";
import Reference from "./pages/Reference";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import Installation from "./components/Installation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="reference" element={<Reference />} />
        <Route path="community" element={<Community />} />
        <Route path="blog" element={<Blog />} />
        <Route path="practice" element={<Practice />} />
        <Route path="installation" element={<Installation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
