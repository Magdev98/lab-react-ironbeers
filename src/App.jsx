import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Navbar";
import Beers from "./pages/Beers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}></Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
      </Routes>
    </div>
  );
}

export default App;
