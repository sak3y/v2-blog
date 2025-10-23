import Navbar from "./components/navbar";
import Content from "./components/content";
import { useState } from "react";
import Sidebar from "./components/sidebar";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center">
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      <Navbar setIsOpen={setIsOpen} />
      <Content />
    </div>
  );
}
export default App;
