import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}
