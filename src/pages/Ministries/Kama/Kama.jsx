import "../Children/Children.css";
import Reveal from "../../../utils/Reveal";
import { FaChevronRight } from "react-icons/fa";
import kama from "../../../assets/364161928_619471003607961_5698538392905565876_n.jpg";
import kama2 from "../../../assets/KAMA.jpg";
import kama3 from "../../../assets/KAMA.jpg";
import kama4 from "../../../assets/KAMA.jpg";
import kama5 from "../../../assets/KAMA.jpg";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

function Children() {
  return (
    <div>
      <div className="background">
        <div className="childrenMinistryOverlay"></div>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/7218955/7218955-uhd_2560_1440_25fps.mp4"
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
              K.A.M.A <FaChevronRight />
            </span>
          </p>
          <h1>K.A.M.A</h1>
        </div>
      </div>
      <Reveal>
        <div className="row1Container">
          <div className="row1">
            <div>
              <p className="textQuote">
                ❝ I have no greater joy than to hear that my children are
                walking in the truth.❞
                <br />
                <span style={{ color: "#a7a7a7" }}>3 John 1:4</span>
              </p>
            </div>
            <img src={kama} alt="kama" />
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="row2">
          <div>
            <div>
              <h2>About KAMA&apos;s Ministry</h2>
              <p className="row2Text">
                At St. Peters, our KAMA Men's Ministry is committed to
                empowering men to grow in their faith, build strong
                relationships, and serve as leaders within their families,
                church, and community.{" "}
              </p>
              <p className="row2Text">
                We believe that each man has a unique purpose in God’s plan, and
                our ministry provides a supportive environment where men can
                deepen their understanding of Scripture, strengthen their walk
                with Christ, and encourage one another in their spiritual
                journey.
              </p>
              <h2>What we do in KAMA&apos;s Ministry?</h2>
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
                    We create opportunities for fellowship and friendship,
                    allowing men to connect and build lasting relationships.
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
                    We engage in service projects that reflect God’s love,
                    making a positive impact in our church and surrounding
                    communities.
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
                    We support men in developing their roles as spiritual
                    leaders in their homes and work to model a life of integrity
                    and faith.
                  </span>
                </li>
              </ul>
            </div>
            <h2>Get Involved</h2>
            <p>
              Our Men's Ministry offers a variety of ways to connect, grow, and
              serve. Whether you're looking for fellowship, mentorship, or
              opportunities to give back, there’s a place for you here.
            </p>
            <ul>
              <li>
                <strong>Volunteer for Events</strong>
                <p>
                  Help plan and execute events like retreats, breakfasts, and
                  service projects.
                </p>
              </li>

              <li>
                <strong>Support Outreach Projects</strong>
                <p>
                  Join initiatives to support our community through charity work
                  and service.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Upcoming Events</h2>
            <ul>
              <li>
                <strong>Men's Breakfast</strong> - Dec 25, 2024
                <p>
                  Join us for a hearty breakfast and fellowship. A guest speaker
                  will share an inspiring message about living a life of faith
                  and purpose.
                </p>
              </li>
              <li>
                <strong>Community Service Day</strong> - Jan 15, 2025
                <p>
                  Let’s give back to the community! We’ll be volunteering at the
                  local shelter to serve meals and provide support to those in
                  need.
                </p>
              </li>
              <li>
                <strong>Men’s Retreat</strong> - Feb 10-12, 2025
                <p>
                  A weekend retreat in the mountains focused on spiritual
                  growth, bonding, and relaxation. Don’t miss this opportunity
                  to recharge.
                </p>
              </li>
              <li>
                <strong>Leadership Workshop</strong> - Mar 5, 2025
                <p>
                  Enhance your leadership skills and learn how to lead
                  effectively in your family, church, and community.
                </p>
              </li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or want to learn more about the Men's
              Ministry, feel free to reach out to us.
            </p>
            <p>
              <strong>Email:</strong> mensministry@churchwebsite.com
              <br />
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="row3">
          <div>
            <img src={kama} alt="kama" />
          </div>
          <div>
            <img src={kama2} alt="kama" />
          </div>
          <div>
            <img src={kama3} alt="kama" />
          </div>
          <div>
            <img src={kama4} alt="kama" />
          </div>
          <div>
            <img src={kama5} alt="kama" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Children;
