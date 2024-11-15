import "../Children/Children.css";
import { FaBookOpen } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BiBible } from "react-icons/bi";
import Reveal from "../../../utils/Reveal";
import { GiChurch } from "react-icons/gi";

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
              Children Ministry <FaChevronRight />
            </span>
          </p>
          <h1>Children Ministry</h1>
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
          <img
            src="https://i.pinimg.com/originals/00/82/1e/00821e92f02ac1b3a7527601a6ff9dab.jpg"
            alt="sunday school"
          />
        </div>
      </div>

      <Reveal>
        <div className="row2">
          <div>
            <div>
              <h2>About TEE Ministry</h2>
              <p className="row2Text">
                The **Theological Education by Extension (TEE)** Ministry at St.
                Peters provides an opportunity for individuals to deepen their
                knowledge of the Word of God while staying engaged in their
                everyday lives. This program is designed for those who want to
                grow in their faith but require flexible learning opportunities.
              </p>
              <p className="row2Text">
                Our mission is to offer accessible and practical theological
                education, empowering individuals to serve in various
                ministries, grow spiritually, and apply biblical principles in
                their daily lives.
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
                    various modules that focus on practical ministry and
                    spiritual growth.
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
                    Facilitate group study sessions that encourage participants
                    to discuss and apply biblical principles to their personal
                    and ministry contexts.
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

              <h2>How TEE Ministry Works</h2>
              <p>
                The TEE program is designed to fit into your schedule, allowing
                for deep theological learning while balancing everyday
                responsibilities. Here's how the ministry operates:
              </p>
              <ul>
                <li>
                  <strong>Independent Learning</strong> - Participants study
                  various theological modules at their own pace with guided
                  resources and reading materials.
                </li>
                <li>
                  <strong>Group Study Sessions</strong> - Regular study groups
                  provide opportunities for participants to discuss their
                  learning, ask questions, and apply biblical concepts.
                </li>
                <li>
                  <strong>Assignments and Feedback</strong> - Participants
                  complete assignments to reflect on their learning, receiving
                  constructive feedback to foster spiritual and intellectual
                  growth.
                </li>
                <li>
                  <strong>Practical Application</strong> - The program
                  encourages the practical application of biblical teachings in
                  real-life ministry and personal life situations.
                </li>
              </ul>
            </div>

            <h2>Get Involved in TEE Ministry</h2>
            <p>
              If you're passionate about growing in your faith and preparing for
              ministry, the TEE Ministry offers numerous opportunities to
              engage:
            </p>
            <ul>
              <li>
                <strong>Enroll in a Course</strong> - Join the next cohort and
                begin your journey of theological education through TEE.
              </li>
              <li>
                <strong>Become a Facilitator</strong> - Lead and guide study
                groups, helping others grow in their understanding of the
                Scriptures and ministry.
              </li>
              <li>
                <strong>Support the Program</strong> - Assist in the logistical
                or financial support of the TEE Ministry, ensuring that more
                people have access to theological education.
              </li>
            </ul>

            <h2>Upcoming TEE Events</h2>
            <ul>
              <li>
                <strong>Theology in Practice Workshop</strong> - Mar 12, 2025
                <p>
                  A workshop designed to help participants bridge the gap
                  between theological knowledge and practical ministry.
                </p>
              </li>
              <li>
                <strong>Study Group Kickoff</strong> - Apr 5, 2025
                <p>
                  Join us for an introductory session and start your journey of
                  deepening your faith and understanding of Scripture.
                </p>
              </li>
              <li>
                <strong>Leadership Development Seminar</strong> - May 10, 2025
                <p>
                  A seminar focused on developing leadership skills within a
                  theological context, ideal for those seeking ministry
                  positions.
                </p>
              </li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For more information or to join the TEE Ministry, please don't
              hesitate to get in touch. We're excited to help you grow in your
              faith and ministry journey!
            </p>
            <p>
              <strong>Email:</strong> tee@churchwebsite.com
              <br />
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
        </div>
      </Reveal>

      <div className="row3">
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/08/ltn-gallery-square-01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/08/ltn-gallery-wide-01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/11/gallery-tgs-tall.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/11/gallery-friends-outside-02.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/08/ltn-gallery-square-02.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Children;
