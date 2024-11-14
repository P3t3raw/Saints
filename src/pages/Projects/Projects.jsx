import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sunday School Project",
      description: "",
      period: "",
    },
    {
      id: 2,
      title: "Sunday School Project",
      description: "",
      period: "",
    },
    {
      id: 3,
      title: "Sunday School Project",
      description: "",
      period: "",
    },
    {
      id: 4,
      title: "Sunday School Project",
      description: "",
      period: "",
    },
    {
      id: 5,
      title: "Sunday School Project",
      description: "",
      period: "",
    },
    {
      id: 6,
      title: "Sunday School Project",
      description: "",
      period: "",
    },
  ];
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
