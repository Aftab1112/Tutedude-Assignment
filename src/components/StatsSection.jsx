import React from "react";
import laptop from "../assets/laptop.png";
import graduated from "../assets/graduated.png";
import question from "../assets/question.png";
import complete from "../assets/complete.png";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stat">
        <img src={laptop} alt="Courses" />
        <p>
          24 <h2>Courses</h2>
        </p>
      </div>
      <div className="straight-line"></div>
      <div className="stat">
        <img src={graduated} alt="graduated" />
        <p>
          30k+ <h2>Learners</h2>
        </p>
      </div>
      <div className="straight-line"></div>
      <div className="stat">
        <img src={question} alt="question" />
        <p>
          {" "}
          100k+ <h2>Doubts Solved</h2>
        </p>
      </div>
      <div className="straight-line"></div>
      <div className="stat">
        <img src={complete} alt="complete" />
        <p>
          10k+ <h2>Student Projects</h2>
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
