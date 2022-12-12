import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Person from "./components/Person";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person/:id" element={<Person />} />
      </Routes>
    </div>
  );
}

export default App;
