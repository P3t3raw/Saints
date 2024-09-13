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
      title: "Community Outreach Day",
      department: "Outreach Ministry",
      description:
        "Join us this Saturday as we reach out to the local community with acts of kindness and service. Volunteers needed!",
    },
    {
      id: 2,
      title: "Women's Fellowship",
      department: "Mother's Union",
      description:
        "All women are invited to a time of fellowship and spiritual growth. This week's theme: 'The Power of Prayer'.",
    },
    {
      id: 3,
      title: "Men's Prayer Breakfast",
      department: "KAMA Desk",
      description:
        "A special prayer breakfast for all men. Come and enjoy a morning of inspiration, fellowship, and food!",
    },
    {
      id: 4,
      title: "Children's Bible Camp",
      department: "Sunday School",
      description:
        "Parents, don't miss the opportunity to enroll your children in this year's Bible camp! Activities, games, and spiritual lessons.",
    },
    {
      id: 5,
      title: "Youth Leadership Training",
      department: "Youth Ministry",
      description:
        "All youths interested in leadership roles are invited to a special training session this Friday at 6 PM in the main hall.",
    },
    {
      id: 6,
      title: "Marriage Seminar",
      department: "Family Ministry",
      description:
        "Couples are encouraged to attend the upcoming marriage seminar with guest speaker Pastor David. Registration is open.",
    },
    {
      id: 7,
      title: "Choir Rehearsal",
      department: "Worship Team",
      description:
        "Choir members, please note that there will be a special rehearsal on Wednesday at 5:30 PM in preparation for the Easter service.",
    },
    {
      id: 8,
      title: "Elders' Meeting",
      department: "Church Elders",
      description: "A reminder for all",
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
          <h1>News and Notices</h1>
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
          <h1>Notices</h1>
        </div>
      </div>
      <div className="Container">
        <div className="noticeContainer">
          {notices.map((notice, index) => (
            <Reveal triggerOnce delay={index * 500}>
              <div
                className={`singleNotice ${
                  flippedNotice === notice.id ? "flipped" : ""
                }`}
                key={notice.id}
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
                      READ THIS NOTICE
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
