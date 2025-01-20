import { useState } from "react";
import Reveal from "../../utils/Reveal";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./Notices.css";

export default function Notices() {
  const [flippedNotice, setFlippedNotice] = useState(null);
  const notices = [
    {
      id: 1,
      title: "Annual Subscription",
      department: "KAMA",
      description:
        "All men are requested to honor their pledges for annual subscription through PAYBILL: 247247 ACCOUNT NUMBER: 808800#YOURNAME",
    },
    {
      id: 2,
      title: "QUOTAS",
      department: "Administration",
      description:
        "Every year, the church allocates Quotas to church departments towards supporting the church operations. Most of these department are yet to offset their allocation for this. We encourage department leaders to work towards offsetting the Quotas.",
    },
    {
      id: 3,
      title: "New Members",
      department: "Choir",
      description:
        "-	The Choir is humbly requesting members of the congregation who would like to join the choir to see the Choir trainer or any choir member.",
    },
    {
      id: 4,
      title: "Welfare Membership",
      department: "Welfare",
      description:
        "We continue to urge church members who have not yet joined the welfare to consider doing so. Benefits are as outlined in the Welfare Constitution and Strategic Plan.",
    },
    {
      id: 5,
      title: "Welfare Arrears",
      department: "Welfare",
      description:
        "We also continue urging welfare members to continue off setting their arrears.",
    },
  ];

  const handleFlip = (id) => {
    // Toggle flip state for a specific notice
    setFlippedNotice(flippedNotice === id ? null : id);
  };
  return (
    <div>
      <div className="noticesBackground">
        <div className="noticesOverlay"></div>
        <div className="noticesContent">
          <h1>Notices</h1>
        </div>
        <div className="noticesBreadCrumbsWrapper">
          <p className="noticesBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Notices <FaChevronRight />
            </span>
          </p>
          {/* <h1>Notices</h1> */}
        </div>
      </div>
      <div className="Container">
        <div className="noticeContainer">
          {notices.map((notice, index) => (
            <Reveal key={notice.id} triggerOnce delay={index * 500}>
              <div
                className={`singleNotice ${
                  flippedNotice === notice.id ? "flipped" : ""
                }`}
              >
                <div className="card-front">
                  <h2>
                    <b>{notice.title}</b>
                  </h2>
                  <div className="singleNoticeContent">
                    <span>Department: {notice.department}</span>
                    <div
                      className="flipButton"
                      onClick={() => handleFlip(notice.id)}
                    >
                      NOTICE
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="singleNoticeContent">
                    <span>{notice.description}</span>
                    <div
                      className="flipButtonBack"
                      onClick={() => handleFlip(notice.id)}
                    >
                      FLIP
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
