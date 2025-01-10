import React from "react";
import "./Widgets.css";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdArrowDroprightCircle } from "react-icons/io";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <IoMdArrowDroprightCircle />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <FaCircleInfo />
      </div>
      {newsArticle(
        "AI is dominating the world",
        "AI agents are performing tremendously in various industries"
      )}
      {newsArticle(
        "Space Exploration Advancements",
        "Private companies are leading new space missions"
      )}
      {newsArticle(
        "Breakthrough in Renewable Energy",
        "Scientists develop a more efficient solar panel"
      )}
      {newsArticle(
        "Global Tech Giants Compete",
        "Major corporations are battling for AI supremacy"
      )}
      {newsArticle(
        "Healthcare Revolutionized by AI",
        "AI tools improve diagnostics and patient care"
      )}
      {newsArticle(
        "Quantum Computing Gains Momentum",
        "Researchers achieve new milestones in quantum technology"
      )}
      {newsArticle(
        "Self-Driving Cars Take Over",
        "Autonomous vehicles become more reliable and widespread"
      )}
      {newsArticle(
        "Climate Change Action Intensifies",
        "Governments and companies pledge to reduce carbon emissions"
      )}
    </div>
  );
}

export default Widgets;
