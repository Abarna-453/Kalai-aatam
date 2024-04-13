import React from "react";
import CardDisplay from "./CardDisplay"; // Import your CardDisplay component
import "./CardContainer.css";

const CardContainer = () => {
  return (
    <div className="app-container">
      <div className="card-container">
        <CardDisplay isFirstTime={true} />{" "}
        {/* Render your first card component */}
        <CardDisplay isFirstTime={false} />{" "}
        {/* Render your second card component */}
      </div>
    </div>
  );
};

export default CardContainer;
