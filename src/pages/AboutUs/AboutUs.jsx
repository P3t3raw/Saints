import React from "react";
import "./AboutUs.css";
import Reveal from "../../utils/Reveal";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import vicarImage from "../../assets/Ven.jpg";
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
      title: "Vicar's Warden",
      name: "Full name",
    },
    {
      id: 2,
      imgSrc: profileImage,
      title: "People's Warden",
      name: "Name",
    },
    {
      id: 3,
      imgSrc: profileImage,
      title: "Vicar",
      name: "",
    },
    {
      id: 4,
      imgSrc: profileImage,
      title: "Parish Secretary",
      name: "",
    },
    {
      id: 5,
      imgSrc: profileImage,
      title: "",
      name: "",
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
            <li>Faith: Trusting in God’s plan for us</li>
            <li>Community: Building relationships that reflect God's love</li>
            <li>Service: Serving others in our church and community</li>
            <li>Compassion: Caring for the needs of the vulnerable</li>
          </ul>
        </div>
      </Reveal>

      {/* Community Involvement Section */}
      <Reveal>
        <div className="churchCommunityInvolvement">
          <h2>Community Involvement</h2>
          <p>
            We are deeply committed to the well-being of our community. Our
            church members actively participate in community development
            projects, outreach programs, and various local initiatives aimed at
            helping those in need.
          </p>
        </div>
      </Reveal>

      {/* What We Believe Section */}
      <Reveal>
        <div className="churchBeliefs">
          <h2>What We Believe</h2>
          <p>
            We believe in the one true God, who exists in three persons: God the
            Father, God the Son, and God the Holy Spirit. We believe that
            salvation is through faith in Jesus Christ alone, and that the Bible
            is the inspired Word of God, the ultimate authority in our lives.
          </p>
        </div>
      </Reveal>

      {/* Testimonies Section */}
      <Reveal>
        <div className="churchTestimonies">
          <h2>Testimonies</h2>
          <p>
            We believe in the power of God to transform lives. Here are some
            inspiring stories from members of our church community who have
            experienced God's work in their lives:
          </p>
          <ul>
            <li>
              "I was healed from a long-term illness through prayer and God's
              grace." – Jane Doe
            </li>
            <li>
              "The Lord provided me with a new job after months of job search."
              – John Smith
            </li>
            <li>
              "I have found peace and joy in serving others in the church." –
              Mary Johnson
            </li>
          </ul>
        </div>
      </Reveal>

      {/* Membership & Joining the Church Section */}
      <Reveal>
        <div className="churchMembership">
          <h2>Membership & Joining the Church</h2>
          <p>
            We welcome you to become a member of our church family. If you are
            interested in joining, you can attend our membership class, where we
            share more about our church's beliefs, values, and the importance of
            membership. Contact us for more details!
          </p>
        </div>
      </Reveal>

      {/* FAQs Section */}
      <Reveal>
        <div className="churchFAQs">
          <h2>FAQs</h2>
          <ul>
            <li>
              <strong>Q:</strong> How can I become a member of the church?
              <br />
              <strong>A:</strong> Attend our membership class and speak with one
              of our leaders.
            </li>
            <li>
              <strong>Q:</strong> When are the church services held?
              <br />
              <strong>A:</strong> We have services on Sundays at 9:00 AM and
              Wednesdays at 6:00 PM.
            </li>
            <li>
              <strong>Q:</strong> Can I volunteer to help with church
              activities?
              <br />
              <strong>A:</strong> Yes! We encourage volunteers to get involved
              in various ministries and outreach programs.
            </li>
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
                    <b>{clergy.name}</b>
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
