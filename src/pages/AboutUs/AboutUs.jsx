import React from "react";
import "./AboutUs.css";
import Reveal from "../../utils/Reveal";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import vicarImage from "../../assets/Ven.jpg";
import layCanonImage from "../../assets/IMG_6818.JPG";
import layreaderImage from "../../assets/IMG_6816.JPG";
import layreaderImageT from "../../assets/IMG_6802.JPG";
import captainImage from "../../assets/IMG_6779.JPG";
import parishSecretaryImage from "../../assets/IMG_6740.JPG";
import mediaDirectorImage from "../../assets/IMG_6840.JPG";
import profileImage from "../../assets/profileIcon.png";
import churchImage from "../../assets/church1.jpg";

function AboutUs() {
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
      imgSrc: captainImage,
      title: "Evangelist",
      name: "Rev. Capt. Peter Owuor",
    },
    {
      id: 4,
      imgSrc: layCanonImage,
      title: "Lay Canon",
      name: "Elizabeth Onyango",
    },
    {
      id: 5,
      imgSrc: layreaderImage,
      title: "Layreader",
      name: "Tabitha Kinyanjui",
    },
    {
      id: 6,
      imgSrc: layreaderImageT,
      title: "Layreader",
      name: "Titus Muruthi",
    },
    {
      id: 7,
      imgSrc: profileImage,
      title: "Layreader",
      name: "Jane Oyieko",
    },
    {
      id: 8,
      imgSrc: profileImage,
      title: "Layreader",
      name: "Joseph Njoka",
    },
  ];

  const admins = [
    {
      id: 1,
      imgSrc: profileImage,
      title: "Vicar's Warden",
      name: "Mr. Zablon Omungo",
    },
    {
      id: 2,
      imgSrc: profileImage,
      title: "People's Warden",
      name: "Mr. Geoffrey Kung'u",
    },
    {
      id: 3,
      imgSrc: parishSecretaryImage,
      title: "Parish Secretary",
      name: "Mr. Fred Opondo",
    },
    {
      id: 4,
      imgSrc: mediaDirectorImage,
      title: "Media Director",
      name: "Mr. Brian Were",
    },
    {
      id: 5,
      imgSrc: profileImage,
      title: "Finance",
      name: "Mr. Ted Kimang'a",
    },
    {
      id: 6,
      imgSrc: profileImage,
      title: "Church Secretary",
      name: "Miss. Jackline",
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
          {/* <h1>About</h1> */}
        </div>
      </div>

      <Reveal>
        <div className="churchHistory">
          <div className="historyContent">
            <div className="Content">
              <h2>Our Church History</h2>
              <p>
                Founded in 1968, ACK St. Peter&apos;s Embakasi began as a small
                gathering of believers initially under the guidance of St.
                Stephen's Church, Jogoo Road. The congregation settled in the
                Mabatini area in the early 1970s, sharing a temporary structure
                with the Friends Church and Salvation Army. During this time,
                the church was nurtured under the leadership of Archdeacon
                Kenneth Stovold and Rev. Oduma. In April 1983, during Easter
                Sunday, the parish was officially inaugurated by the late
                Archbishop, the Most Rev. Manasses Kuria, with Rev. Moses Ndungu
                as its first vicar. The following year, the church was blessed
                with its current land in which a temporary structure was set up
                serving the congregation for 16 years. As the Embakasi area
                grew, so did the church, becoming a cornerstone of spiritual
                life in the community throughout the 1980s and 1990s. Today, ACK
                St. Peter&apos;s Embakasi continues to thrive as a beacon of
                hope, community, and transformation. From humble beginnings, it
                has grown into a vibrant and dynamic congregation, offering
                spiritual guidance, worship, and support to the Embakasi
                community and beyond.
              </p>
            </div>
            <div className="contentImage">
              <img src={churchImage} alt="church" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Church Mission Section */}
      <Reveal>
        <div className="churchMission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to proclaim the gospel of Jesus Christ, making
            disciples of all nations, and to serve our community through acts of
            love, charity, and service.
          </p>
        </div>
      </Reveal>

      {/* Church Vision Section */}
      <Reveal>
        <div className="churchVision">
          <h2>Our Vision</h2>
          <p>
            To be a vibrant and growing church, rooted in faith, devoted to
            Christ, and deeply committed to our mission of serving others.
          </p>
        </div>
      </Reveal>

      {/* Core Values Section */}
      <Reveal>
        <div className="churchValues">
          <h2>Our Core Values</h2>
          <ul>
            <li>Ministry</li>
            <li>Community</li>
            <li>Integrity</li>
            <li>Transformation and Accountability</li>
          </ul>
        </div>
      </Reveal>

      {/* Clergy Team Section */}
      <Reveal>
        <div className="ministryTeam">
          <h2>The Clergy</h2>
          <div className="ministryMembers">
            {clergies.map((clergy) => (
              <div className="singleClergy" key={clergy.id}>
                <img src={clergy.imgSrc} alt="clergy" />
                <div className="singleClergyContent">
                  <span>
                    <strong>{clergy.name}</strong>
                  </span>
                  <span>{clergy.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Administrative Staff Section */}
      <Reveal>
        <div className="churchAdministration">
          <h2>Administrative Staff</h2>
          <div className="administrationMembers">
            {admins.map((admin) => (
              <div className="singleAdmin" key={admin.id}>
                <img src={admin.imgSrc} alt="admin" />
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

export default AboutUs;
