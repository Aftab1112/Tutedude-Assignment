import React from "react";
import Header from "./components/Header";
import "./App.css";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsSection />
    </div>
  );
};

export default App;
