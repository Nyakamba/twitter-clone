import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-5xl text-red-500 bg-teal-400">Hello world</p>
    </>
  );
}

export default App;
