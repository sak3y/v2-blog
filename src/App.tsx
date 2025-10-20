import { useState } from "react";
import Navbar from "./components/navbar";

function App() {
  const [postCount, setPostCount] = useState<number>(0);
  return (
    <div className="flex flex-col w-40 ">
      <Navbar />
      <main className="flex flex-col min-w-screen items-center max-w-[70vw] mt-10">
        <h1 className="text-5xl italic font-bold">Blog</h1>
        <div className="font-bold mt-8">{postCount} Posts</div>
      </main>
    </div>
  );
}
export default App;
