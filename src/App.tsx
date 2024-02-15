import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import {
  footerAPI,
  heroapi,
  highlight,
  popularsales,
  sneaker,
  story,
  toprateslaes,
} from "./components/Data/index";
import Sales from "./components/Sales";
import FlexContent from "./components/FlexContent";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <main>
        <Hero data={heroapi} />
        <Sales
          endpoint={popularsales}
          className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8"
        />
        <FlexContent data={highlight} className="flex-row-reverse" />
        <Sales
          endpoint={toprateslaes}
          className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8"
        />
        <FlexContent data={sneaker} />
        <Stories data={story} />
        <Footer data={footerAPI} />
      </main>
    </div>
  );
}

export default App;
