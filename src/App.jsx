import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Navbar";
import AllBeers from "./pages/AllBeers";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<AllBeers />} />
          <Route path="/beers/:beerId" element={<SingleBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
