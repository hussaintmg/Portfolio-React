import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home/Home";
import Skills from "../src/Pages/Skills/Skills";
import Projects from "../src/Pages/Projects/Projects";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:any" element={<Home />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
