import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Welfare() {
  return (
    <div>
      <div className="noticesBackground">
        <div className="noticesOverlay"></div>
        <div className="noticesContent">
          <h1>Projects</h1>
        </div>
        <div className="noticesBreadCrumbsWrapper">
          <p className="noticesBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Projects <FaChevronRight />
            </span>
          </p>
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
}
