// import { Link } from "react-router-dom";
// import "./MotherUnion.css";
import "../Children/Children.css";
import { FaChevronRight } from "react-icons/fa";
import mothersUnion from "../../../assets/357746491_619471053607956_411327406936014473_n.jpg";
import mothersUnion2 from "../../../assets/englishService.jpg";
import mothersUnion3 from "../../../assets/MU.jpg";
import mothersUnion4 from "../../../assets/MU.jpg";
import mothersUnion5 from "../../../assets/englishService.jpg";
import { FaRegHeart } from "react-icons/fa";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import Reveal from "../../../utils/Reveal";

function Children() {
  return (
    <div>
      <div className="background">
        <div className="childrenMinistryOverlay"></div>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/3191109/3191109-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/7568735/7568735-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
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
              ❝ I have no greater joy than to hear that my children are walking
              in the truth.❞
              <br />
              <span style={{ color: "#a7a7a7" }}>3 John 1:4</span>
            </p>
          </div>
          <img src={mothersUnion} alt="mothers union" />
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
              <h2>What we do in the Mother's Union Ministry?</h2>
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
            <h2>Get Involved</h2>
            <p>
              The Mother's Union Ministry offers numerous ways for women to
              connect, grow, and contribute. Whether you're seeking spiritual
              growth, fellowship, or opportunities to give back, you'll find a
              welcoming space here.
            </p>
            <ul>
              <li>
                <strong>Volunteer for Events</strong>
                <p>
                  Help plan and organize events like retreats, workshops, and
                  outreach programs to make a difference in our community.
                </p>
              </li>
              <li>
                <strong>Support Outreach Projects</strong>
                <p>
                  Join hands in initiatives aimed at uplifting families and
                  individuals through acts of love and service.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Upcoming Events</h2>
            <ul>
              <li>
                <strong>Women's Prayer Breakfast</strong> - Dec 25, 2024
                <p>
                  Gather for an uplifting morning of prayer, fellowship, and an
                  inspiring message tailored for women of faith.
                </p>
              </li>
              <li>
                <strong>Community Support Day</strong> - Jan 15, 2025
                <p>
                  Join us as we reach out to local families in need, providing
                  support and encouragement.
                </p>
              </li>
              <li>
                <strong>Women's Retreat</strong> - Feb 10-12, 2025
                <p>
                  A serene weekend retreat to focus on spiritual renewal,
                  personal growth, and building meaningful relationships.
                </p>
              </li>
              <li>
                <strong>Family Enrichment Workshop</strong> - Mar 5, 2025
                <p>
                  Learn practical ways to strengthen your family bond and create
                  a nurturing environment for everyone in your home.
                </p>
              </li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or want to learn more about the Mother's
              Union Ministry, feel free to reach out to us.
            </p>
            <p>
              <strong>Email:</strong> mothersunion@churchwebsite.com
              <br />
              <strong>Phone:</strong> (123) 456-7890
            </p>
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
