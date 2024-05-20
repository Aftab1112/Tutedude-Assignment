import React from "react";
import "./App.css";
import CourseCurriclumPage from "./components/CourseCurriclumPage";
import Home from "./components/Home";
import RefundOffer from "./components/RefundOffer";

const App = () => {
  return (
    <div className="App">
      <Home />
      <CourseCurriclumPage />
      <RefundOffer />
    </div>
  );
};

export default App;
