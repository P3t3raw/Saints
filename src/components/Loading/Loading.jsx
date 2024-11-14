import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h2 className="loading-text">ACK St. Peter's Embakasi</h2>
      <p className="loading-subtext">Bringing the church closer to you...</p>
    </div>
  );
}

export default Loading;
