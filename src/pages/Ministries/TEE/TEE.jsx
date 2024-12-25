import "../Children/Children.css";
import { FaBookOpen } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BiBible } from "react-icons/bi";
import Reveal from "../../../utils/Reveal";
import { GiChurch } from "react-icons/gi";
import image1 from "../../../assets/IMG_6816.JPG";
import image2 from "../../../assets/YouthMinistry3.jpg";
import video1 from "../../../assets/3987756-hd_1280_720_24fps.mp4";

function Children() {
  return (
    <div>
      <div className="background">
        <div className="childrenMinistryOverlay"></div>
        <video className="video" src={video1} autoPlay muted loop></video>
        <video className="video" src={video1} autoPlay muted loop></video>
        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <a href="/">Home</a> <FaChevronRight />
            </span>
            <span>
              Ministries <FaChevronRight />
            </span>
            <span>
              T.E.E <FaChevronRight />
            </span>
          </p>
          <h1>Theological Education by Extension</h1>
        </div>
      </div>
      <div className="row1Container">
        <div className="row1">
          <div>
            <p className="textQuote">
              ❝ And the things you have heard me say in the presence of many
              witnesses entrust to reliable people who will also be qualified to
              teach others.❞
              <br />
              <span style={{ color: "#a7a7a7" }}>2 Timothy 2:2</span>
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1621863367737-66dae1af6ea3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="TEE"
          />
        </div>
      </div>

      <Reveal>
        <div className="row2">
          <div>
            <h2>About the T.E.E Ministry</h2>
            <p className="row2Text">
              The Theological Education by Extension (TEE) Ministry at St.
              Peters provides an opportunity for individuals to deepen their
              knowledge of the Word of God while staying engaged in their
              everyday lives. This program is designed for those who want to
              grow in their faith but require flexible learning opportunities.
            </p>
            <p className="row2Text">
              Our mission is to offer accessible and practical theological
              education, empowering individuals to serve in various ministries,
              grow spiritually, and apply biblical principles in their daily
              lives.
            </p>
            <h2>What We Do in TEE Ministry</h2>
            <ul style={{ padding: "0" }}>
              <li
                style={{
                  display: "flex",
                  marginBlockEnd: "10px",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <BiBible style={{ fontSize: "40px", color: "#1f2837" }} />
                <span>
                  Provide flexible, self-paced theological education through
                  various modules that focus on practical ministry and spiritual
                  growth.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  marginBlockEnd: "10px",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <FaBookOpen style={{ fontSize: "40px", color: "#1f2837" }} />
                <span>
                  Facilitate group study sessions that encourage participants to
                  discuss and apply biblical principles to their personal and
                  ministry contexts.
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <GiChurch style={{ fontSize: "40px", color: "#1f2837" }} />
                <span>
                  Equip participants for church leadership roles, enhancing
                  their ability to serve effectively in ministry and community
                  outreach.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p className="contactUsText">
              For more information about the TEE Ministry, feel free to reach
              out to us. We’d love to hear from you!
            </p>
            <p>
              <strong>Email:</strong> tee@ackstpetersembakasi.org
              <br />
              <strong>Phone:</strong>
            </p>
            <h2 style={{ marginTop: "1.5rem" }}>Upcoming TEE Events</h2>
            <ul className="events">
              <li>
                <strong>No Upcoming Events</strong>
                <p>
                  We're currently planning exciting new activities! Stay tuned
                  for updates and check back soon.
                </p>
              </li>
              {/* <li>
                <strong>Study Group Kickoff</strong> - Apr 5, 2025
                <p>
                  Join us for an introductory session and start your journey of
                  deepening your faith and understanding of Scripture.
                </p>
              </li> */}
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="row3">
        <div>
          <img
            src="https://images.unsplash.com/photo-1593193293577-f266fd432025?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1655847769167-1f49b7751100?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1682646276/photo/bible-study-inscription-made-of-wooden-letters-on-a-wooden-background.jpg?s=2048x2048&w=is&k=20&c=nWidTovOWHjJ-tfcvKN-5Ap4xAtS92nfVa1IGePbIIY="
            alt=""
          />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Children;
