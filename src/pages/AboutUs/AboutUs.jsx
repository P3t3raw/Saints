import React from "react";
import "./AboutUs.css";
import Reveal from "../../utils/Reveal";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import vicarImage from "../../assets/Ven.jpg";
import profileImage from "../../assets/profileIcon.png";
import churchImage from "../../assets/church1.jpg";

function aboutUs() {
  const clergies = [
    {
      id: 1,
      imgSrc: vicarImage,
      title: "Vicar",
      name: "Ven. Canon Gilbert Odhiambo",
    },
    {
      id: 2,
      imgSrc: profileImage,
      title: "Curate",
      name: "Rev. Benson",
    },
    {
      id: 3,
      imgSrc: profileImage,
      title: "Evangelist",
      name: "Capt. Peter Owuor",
    },
    {
      id: 4,
      imgSrc: profileImage,
      title: "LayCanon",
      name: "Elizabeth",
    },
    {
      id: 5,
      imgSrc: profileImage,
      title: "LayReader",
      name: "Tabitha",
    },
  ];
  const admins = [
    {
      id: 1,
      imgSrc: profileImage,
      title: "Vicar",
      name: "Canon Gilbert Odhiambo",
    },
    {
      id: 2,
      imgSrc: profileImage,
      title: "Vicar",
      name: "Canon Gilbert Odhiambo",
    },
    {
      id: 3,
      imgSrc: profileImage,
      title: "Vicar",
      name: "Canon Gilbert Odhiambo",
    },
    {
      id: 4,
      imgSrc: profileImage,
      title: "Vicar",
      name: "Canon Gilbert Odhiambo",
    },
    {
      id: 5,
      imgSrc: profileImage,
      title: "Vicar",
      name: "Canon Gilbert Odhiambo",
    },
  ];

  return (
    <div>
      <div className="aboutBackground">
        <div className="aboutOverlay"></div>
        <div className="aboutContent">
          <h1>Get to Know Us</h1>
        </div>
        <div className="aboutBreadCrumbsWrapper">
          <p className="aboutBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              About <FaChevronRight />
            </span>
          </p>
          <h1>About</h1>
        </div>
      </div>
      <Reveal>
        <div className="churchHistory">
          <div className="historyContent">
            <div className="Content">
              {/* <div className="aboutOverlay"></div> */}
              <h3>A spiritual Voyage</h3>
              <h2>Our Church History</h2>
              <p>
                Founded in 1972, ACK St. Peter’s Embakasi began as a small
                gathering of believers who came together with a desire to
                worship and serve God in the growing Embakasi community. Under
                the guidance of the Anglican Church of Kenya (ACK), the church
                started as a modest building where a few families would meet for
                Sunday services and fellowship. As the Embakasi area expanded,
                so did the church. Throughout the 1980s and 1990s, St. Peter’s
                became a cornerstone of spiritual life in the community,
                offering a place of worship, guidance, and support.In the 2000s,
                with a growing congregation, ACK St. Peter’s embarked on a major
                expansion project to accommodate its increasing membership. This
                included the construction of a larger worship hall, classrooms
                for Sunday school, and various church facilities to support the
                growing needs of the parish. Today, ACK St. Peter’s Embakasi
                continues to thrive, serving not only as a place of worship but
                also as a beacon of hope, community, and transformation.
              </p>
            </div>
            <div className="contentImage">
              <img src={churchImage} alt="church" />
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="ministryTeam">
          <h2>Ministry Team</h2>
          <div className="ministryMembers">
            {clergies.map((clergy) => (
              <div className="singleClergy" key={clergy.id}>
                <img src={clergy.imgSrc} alt="clergy" />
                <div className="singleClergyContent">
                  <span>
                    <b>{clergy.name}</b>
                  </span>
                  <span>{clergy.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="churchAdministration">
          <h2>Administrative Staff</h2>
          <div className="administrationMembers">
            {admins.map((admin) => (
              <div className="singleAdmin" key={admin.id}>
                <img src={admin.imgSrc} alt="clergy" />
                <div className="singleClergyContent">
                  <span>
                    <b>{admin.name}</b>
                  </span>
                  <span>{admin.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default aboutUs;
