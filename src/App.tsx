import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PostsProvider } from "./context/postsContext";

import Content from "./pages/content";
import About from "./pages/about";
import Contact from "./pages/contact";
import PostPage from "./pages/postPage";
import SearchResults from "./pages/searchResults";
import { QueryProvider } from "./context/queryContext";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Sidebar state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false; //
  }); // Dark theme toggle

  // Store whether dark theme is on - locally
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="flex flex-col font-[Merriweather] items-center min-h-screen dark:text-zinc-50 dark:bg-zinc-900">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* dark bg overlay on out of focus */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-4 min-h-screen"
          onClick={() => setIsOpen(false)}
        />
      )}
      <QueryProvider>
        <Navbar setIsOpen={setIsOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
      </QueryProvider>

      <PostsProvider>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </PostsProvider>
    </div>
  );
}
export default App;
