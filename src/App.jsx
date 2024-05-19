import React from "react";
import "./App.css";
import CourseCurriclumPage from "./components/CourseCurriclumPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Home />
      <CourseCurriclumPage />
    </div>
  );
};

export default App;
