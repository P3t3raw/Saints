// import { Link } from "react-router-dom";
import "./MotherUnion.css";
import Blogs from "../../../components/Blogs/Blogs";
// import "../Children/Children.css";
import { FaChevronRight } from "react-icons/fa";
import mothersUnion1 from "../../../assets/mothers.jpeg";
import mothersUnion from "../../../assets/WhatsApp Image 2025-01-30 at 19.53.16.jpeg";
import mothersUnion4 from "../../../assets/357746491_619471053607956_411327406936014473_n.jpg";
import mothersUnion3 from "../../../assets/WhatsApp Image 2025-01-30 at 19.56.20.jpeg";
import mothersUnion5 from "../../../assets/MU.jpg";
import mothersUnion2 from "../../../assets/WhatsApp Image 2025-01-30 at 19.58.55.jpeg";
import { FaRegHeart } from "react-icons/fa";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import Reveal from "../../../utils/Reveal";
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
              Mothers Union <FaChevronRight />
            </span>
          </p>
          <h1>Mothers Union</h1>
        </div>
      </div>
      <div className="row1Container">
        <div className="row1">
          <div>
            <p className="textQuote">
              ❝ I can do all things through Christ who stregthens me.❞
              <br />
              <span style={{ color: "#a7a7a7" }}>Philippians 4:13</span>
            </p>
          </div>
          <img src={mothersUnion1} alt="mothers union" />
        </div>
      </div>
      <Reveal>
        <div className="row2">
          <div>
            <div>
              <h2>About the Mother's Union Ministry</h2>
              <p className="row2Text">
                At St. Peters, our Mother's Union Ministry is dedicated to
                supporting women in their spiritual growth, fostering meaningful
                relationships, and empowering them to serve as pillars of
                strength in their families, church, and community.
              </p>
              <p className="row2Text">
                We believe that every woman has a divine purpose, and through
                our ministry, we provide a nurturing environment where women can
                deepen their faith, grow in love, and make a lasting impact
                through their roles as mothers, wives, and leaders.
              </p>
              <h2>What We do in Mother's Union</h2>
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
                    We host Bible study sessions and prayer meetings to
                    strengthen our spiritual walk and encourage one another in
                    faith.
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
                  <BiHomeHeart style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    We organize events and workshops to promote healthy family
                    values and nurture the next generation.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <FaRegHeart style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    We engage in community outreach programs, showing love and
                    support to those in need through acts of service and
                    kindness.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or want to learn more about the Mother's
              Union Ministry, feel free to reach out to us.
            </p>
            <p>
              <strong>Email:</strong> mothersunion@ackstpetersembakasi.org
              <br />
              {/* <strong>Phone:</strong> */}
            </p>
            <h2 style={{ marginTop: "1.5rem" }}>Upcoming Events</h2>
            <ul className="events">
              <li>
                <strong>No Upcoming Events</strong>
                <p>
                  We're currently planning exciting new activities! Stay tuned
                  for updates and check back soon.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="row4Container">
          <div className="row4">
            <div>
              <h2>Blogs</h2>
              <Blogs />
            </div>
            <div>
              <h2>Member Stories</h2>
              <p>
                Explore inspiring stories from our M.U members about their
                journeys in faith, growth, and transformation. Each story
                highlights the power of faith in everyday life, offering
                encouragement and hope. Join us in celebrating the diverse paths
                within our church family.
              </p>
              <div>
                <ul className="devotional-list">
                  {/* <li>
                    <h4>Upcoming Devotional Piece</h4>
                    <p>
                      Dive into an inspiring and thought-provoking discussion
                      that challenges your perspectives and stimulates deep
                      thinking. This week's piece encourages reflection and
                      invites you to explore new ideas, share your insights, and
                      join a meaningful conversation with others. Don’t miss out
                      on the chance to engage with content that truly matters.
                    </p>
                  </li>
                  <li>
                    <h4>Upcoming Devotional Piece</h4>
                    <p>
                      Dive into an inspiring and thought-provoking discussion
                      that challenges your perspectives and stimulates deep
                      thinking. This week's piece encourages reflection and
                      invites you to explore new ideas, share your insights, and
                      join a meaningful conversation with others. Don’t miss out
                      on the chance to engage with content that truly matters.
                    </p>
                  </li> */}
                </ul>
                <button>Share Your Story</button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <div className="row3">
        <div>
          <img src={mothersUnion} alt="" />
        </div>
        <div>
          <img src={mothersUnion2} alt="" />
        </div>
        <div>
          <img src={mothersUnion3} alt="" />
        </div>
        <div>
          <img src={mothersUnion4} alt="" />
        </div>
        <div>
          <img src={mothersUnion5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Children;
