import React, { useState } from "react";

const Content = () => {
  const [showDetails, setShowDetails] = useState(false);

  const openInfo = () => {
    setShowDetails(true);
  };

  const closeInfo = () => {
    setShowDetails(false);
  };

  return (
    <div className={`user ${!showDetails ? "hide-details" : ""}`} id="userbox">
      <img src="/B.L/img3.jpg" alt="User" onClick={openInfo} />
      <div className="info">
        <h1>Aftab Shahmadar</h1>
        <p>
          Studying as a computer engineer at <span>Radhe Inst.</span>
        </p>
        <p>From: Gujarat, India</p>
        <a href="#">Explore more details</a>
      </div>
      <div className="close-icon" onClick={closeInfo}></div>
    </div>
  );
};

export default Content;
