import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./component/Navbar/Navbar";
import AllBeers from "./pages/AllBeers";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/beers" element={<AllBeers />} />
          <Route path="/beers/:beerId" element={<SingleBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;