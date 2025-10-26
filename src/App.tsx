import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Content from "./components/pages/content";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center">
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-15 z-4 min-h-screen"
          onClick={() => setIsOpen(false)}
        />
      )}
      <Navbar setIsOpen={setIsOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
export default App;
