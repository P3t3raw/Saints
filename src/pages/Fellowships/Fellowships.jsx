import React, { useMemo, useState } from "react";
import "./Fellowships.css";
import mradiImage from "../../assets/YouthMinistry3.jpg";
import juakaliImage from "../../assets/KAMA.jpg";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineDateRange, MdOutlineLocationOn } from "react-icons/md";

export default function Fellowships() {
  const fellowships = useMemo(
    () => [
      {
        id: 1,
        imgSrc: mradiImage,
        title: "Baraka Fellowship",
        meetingDate: "Oct 25",
        meetingTime: "5:00PM",
        hostName: "Miss. Hellen",
        desc: "The Baraka Fellowship is a community-centered fellowship aimed at fostering spiritual growth, leadership, and practical skills among its members. It provides a supportive environment for individuals to deepen their faith, engage in meaningful discussions, and build a sense of unity and purpose. Through regular meetings, Bible study sessions, and service projects, the fellowship encourages participants to live out their faith, develop their God-given talents, and positively impact their communities.",
        tagline: "Empowering Faith, Building Community",
        location: "St. John's Community Center, Nairobi, Kenya",
        membershipEligibility:
          "Open to anyone above 18 years who is interested in spiritual growth and community involvement.",
        howToJoin:
          "Contact us through our website or visit one of our regular Friday meetings to learn more and get involved.",
        contact: " Phone: +254 700 000 000",
        leadershipTeam: [
          { name: "Miss. Hellen", role: "Host & Fellowship Leader" },
          { name: "Mr. John Doe", role: "Community Outreach Coordinator" },
          { name: "Ms. Jane Smith", role: "Bible Study Leader" },
        ],
      },

      {
        id: 2,
        imgSrc: juakaliImage,
        title: "Juakali Fellowship",
        meetingDate: "Oct 25",
        meetingTime: "5:00PM",
        hostName: "Miss. Hellen",
        desc: "The Juakali Fellowship is a community-centered fellowship aimed at fostering spiritual growth, leadership, and practical skills among its members. It provides a supportive environment for individuals to deepen their faith, engage in meaningful discussions, and build a sense of unity and purpose. Through regular meetings, Bible study sessions, and service projects, the fellowship encourages participants to live out their faith, develop their God-given talents, and positively impact their communities.",
        tagline: "Empowering Faith, Building Community",
        location: "St. John's Community Center, Nairobi, Kenya",
        membershipEligibility:
          "Open to anyone above 18 years who is interested in spiritual growth and community involvement.",
        howToJoin:
          "Contact us through our website or visit one of our regular Friday meetings to learn more and get involved.",
        contact: " Phone: +254 700 000 000",
        leadershipTeam: [
          { name: "Miss. Hellen", role: "Host & Fellowship Leader" },
          { name: "Mr. John Doe", role: "Community Outreach Coordinator" },
          { name: "Ms. Jane Smith", role: "Bible Study Leader" },
        ],
      },
      {
        id: 3,
        imgSrc: mradiImage,
        title: "Mradi Fellowship",
        meetingDate: "Oct 25",
        meetingTime: "5:00PM",
        hostName: "Miss. Hellen",
        desc: "The Mradi Fellowship is a community-centered fellowship aimed at fostering spiritual growth, leadership, and practical skills among its members. It provides a supportive environment for individuals to deepen their faith, engage in meaningful discussions, and build a sense of unity and purpose.",
        tagline: "Empowering Faith, Building Community",
        location: "St. John's Community Center, Nairobi, Kenya",
        membershipEligibility:
          "Open to anyone above 18 years who is interested in spiritual growth and community involvement.",
        howToJoin:
          "Contact us through our website or visit one of our regular Friday meetings to learn more and get involved.",
        contact: "Phone: +254 700 000 000",
        leadershipTeam: [
          { name: "Miss. Hellen", role: "Host & Fellowship Leader" },
          { name: "Mr. John Doe", role: "Community Outreach Coordinator" },
          { name: "Ms. Jane Smith", role: "Bible Study Leader" },
        ],
      },
      {
        id: 4,
        imgSrc: mradiImage,
        title: "Outer Fellowship",
        meetingDate: "Oct 25",
        meetingTime: "5:00PM",
        hostName: "Miss. Hellen",
        desc: "The Outer Fellowship is a community-centered fellowship aimed at fostering spiritual growth, leadership, and practical skills among its members. It provides a supportive environment for individuals to deepen their faith, engage in meaningful discussions, and build a sense of unity and purpose.",
        tagline: "Empowering Faith, Building Community",
        location: "St. John's Community Center, Nairobi, Kenya",
        membershipEligibility:
          "Open to anyone above 18 years who is interested in spiritual growth and community involvement.",
        howToJoin:
          "Contact us through our website or visit one of our regular Friday meetings to learn more and get involved.",
        contact: " Phone: +254 700 000 000",
        leadershipTeam: [
          { name: "Miss. Hellen", role: "Host & Fellowship Leader" },
          { name: "Mr. John Doe", role: "Community Outreach Coordinator" },
          { name: "Ms. Jane Smith", role: "Bible Study Leader" },
        ],
      },
      {
        id: 5,
        imgSrc: mradiImage,
        title: "Nyayo 1 Fellowship",
        meetingDate: "Oct 25",
        meetingTime: "5:00PM",
        hostName: "Miss. Hellen",
        desc: "The Nyayo 1 Fellowship is a community-centered fellowship aimed at fostering spiritual growth, leadership, and practical skills among its members. It provides a supportive environment for individuals to deepen their faith, engage in meaningful discussions, and build a sense of unity and purpose.",
        tagline: "Empowering Faith, Building Community",
        location: "St. John's Community Center, Nairobi, Kenya",
        membershipEligibility:
          "Open to anyone above 18 years who is interested in spiritual growth and community involvement.",
        howToJoin:
          "Contact us through our website or visit one of our regular Friday meetings to learn more and get involved.",
        contact: "Phone: +254 700 000 000",
        leadershipTeam: [
          { name: "Miss. Hellen", role: "Host & Fellowship Leader" },
          { name: "Mr. John Doe", role: "Community Outreach Coordinator" },
          { name: "Ms. Jane Smith", role: "Bible Study Leader" },
        ],
      },
      {
        id: 6,
        imgSrc: mradiImage,
        title: "Nyayo 2 Fellowship",
        meetingDate: "Oct 25",
        meetingTime: "5:00PM",
        hostName: "Miss. Hellen",
        desc: "The Nyayo 2 Fellowship is a community-centered fellowship aimed at fostering spiritual growth, leadership, and practical skills among its members. It provides a supportive environment for individuals to deepen their faith, engage in meaningful discussions, and build a sense of unity and purpose.",
        tagline: "Empowering Faith, Building Community",
        location: "St. John's Community Center, Nairobi, Kenya",
        membershipEligibility:
          "Open to anyone above 18 years who is interested in spiritual growth and community involvement.",
        howToJoin:
          "Contact us through our website or visit one of our regular Friday meetings to learn more and get involved.",
        contact: "Phone: +254 700 000 000",
        leadershipTeam: [
          { name: "Miss. Hellen", role: "Host & Fellowship Leader" },
          { name: "Mr. John Doe", role: "Community Outreach Coordinator" },
          { name: "Ms. Jane Smith", role: "Bible Study Leader" },
        ],
      },
      {
        id: 7,
        imgSrc: mradiImage,
        title: "Police Line Fellowship",
        meetingDate: "Oct 25",
        meetingTime: "5:00PM",
        hostName: "Miss. Hellen",
        desc: "The Police Line Fellowship is a community-centered fellowship aimed at fostering spiritual growth, leadership, and practical skills among its members. It provides a supportive environment for individuals to deepen their faith, engage in meaningful discussions, and build a sense of unity and purpose.",
        tagline: "Empowering Faith, Building Community",
        location: "St. John's Community Center, Nairobi, Kenya",
        membershipEligibility:
          "Open to anyone above 18 years who is interested in spiritual growth and community involvement.",
        howToJoin:
          "Contact us through our website or visit one of our regular Friday meetings to learn more and get involved.",
        contact: "Phone: +254 700 000 000",
        leadershipTeam: [
          { name: "Miss. Hellen", role: "Host & Fellowship Leader" },
          { name: "Mr. John Doe", role: "Community Outreach Coordinator" },
          { name: "Ms. Jane Smith", role: "Bible Study Leader" },
        ],
      },
    ],
    []
  );

  const handleSelectionChange = (event) => {
    const selectedId = parseInt(event.target.value);
    setSelectedFellowship(fellowships.find((f) => f.id === selectedId));
  };

  const [selectedFellowship, setSelectedFellowship] = useState(fellowships[0]);
  return (
    <div>
      <div className="noticesBackground">
        <div className="noticesOverlay"></div>
        <div className="noticesContent">
          <h1>Estate Fellowships</h1>
        </div>
        <div className="noticesBreadCrumbsWrapper">
          <p className="noticesBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Estate Fellowships <FaChevronRight />
            </span>
          </p>
        </div>
      </div>
      {
        <div className="fellowshipSearch">
          {
            <select onChange={handleSelectionChange} defaultValue="">
              <option value="" disabled>
                Select a Fellowship
              </option>
              {fellowships.map((fellowship) => (
                <option key={fellowship.id} value={fellowship.id}>
                  {fellowship.title}
                </option>
              ))}
            </select>
          }
        </div>
      }
      <div className="fellowshipWrapper">
        <div className="fellowshipCard">
          <img
            src={selectedFellowship.imgSrc}
            alt={`${selectedFellowship.title}`}
            className="fellowshipPic"
          />
          <div className="fellowshipContent">
            <div className="leftCardPart">
              <h2 className="title">{selectedFellowship.title}</h2>
              <p className="tagline">
                <i>{selectedFellowship.tagline}</i>
              </p>

              <div className="meetingInfo">
                <p className="nextMeeting">
                  <strong>Next Meeting:</strong> 
                  <span style={{display:'flex', lineHeight:'0', gap:'4px', alignItems:'center'}}>
                    <span style={{display:'flex', lineHeight:'0', gap:'4px', alignItems:'center'}}><MdOutlineDateRange />{selectedFellowship.meetingDate},{' '}{selectedFellowship.meetingTime}</span>
                    <span style={{display:'flex', lineHeight:'0', gap:'4px', alignItems:'center'}}><MdOutlineLocationOn />{selectedFellowship.hostName}</span>
                  </span>
                </p>
              </div>

              <p className="fellowshipDesc">{selectedFellowship.desc}</p>
            </div>
            <div className="rightCardPart">
              {/* <div className="membershipInfo">
                <h3>Membership Eligibility</h3>
                <p>{selectedFellowship.membershipEligibility}</p>
                <h3>How to Join</h3>
                <p>{selectedFellowship.howToJoin}</p>
              </div> */}

              <div className="contactInfo">
                <h3>Contact</h3>
                <p>{selectedFellowship.contact}</p>
              </div>

              <div className="leadershipTeam">
                <h3>Leadership Team</h3>
                {selectedFellowship.leadershipTeam.map((leader, index) => (
                  <p key={index}>
                    <strong>{leader.name}</strong> - {leader.role}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
