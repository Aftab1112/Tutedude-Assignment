import React from "react";
import "./App.css";
import CourseCurriclumPage from "./components/CourseCurriclumPage";
import Home from "./components/Home";
import RefundOffer from "./components/RefundOffer";
import CompaniesHiring from "./components/CompaniesHiring";

const App = () => {
  return (
    <div className="App">
      <Home />
      <CourseCurriclumPage />
      <RefundOffer />
      <CompaniesHiring />
    </div>
  );
};

export default App;
