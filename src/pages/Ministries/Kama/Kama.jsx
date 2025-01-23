import "./Kama.css";
import Reveal from "../../../utils/Reveal";
import Blogs from "../../../components/Blogs/Blogs";
import { FaChevronRight } from "react-icons/fa";
import kama from "../../../assets/364161928_619471003607961_5698538392905565876_n.jpg";
import kama2 from "../../../assets/IMG_6799.JPG";
import kama3 from "../../../assets/IMG_6742.JPG";
import kama4 from "../../../assets/KAMA.jpg";
import kama5 from "../../../assets/IMG_6840.JPG";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import video1 from "../../../assets/3987756-hd_1280_720_24fps.mp4";
function Men() {
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
                ❝ As for me and my household, we will serve the Lord.❞
                <br />
                <span style={{ color: "#a7a7a7" }}>Joshua 24:15</span>
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
                At St. Peters, the KAMA Ministry is committed to empowering men
                to grow in their faith, build strong relationships, and serve as
                leaders within their families, church, and community.{" "}
              </p>
              <p className="row2Text">
                We believe that each man has a unique purpose in God’s plan, and
                our ministry provides a supportive environment where men can
                deepen their understanding of Scripture, strengthen their walk
                with Christ, and encourage one another in their spiritual
                journey.
              </p>
              <h2 style={{ marginBlock: "10px" }}>
                What we do in KAMA&apos;s Ministry?
              </h2>
              <ul style={{ padding: "0", marginBlock: "0" }}>
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
          </div>
          <div>
            <h2 style={{ marginBottom: "10px" }}>Contact Us</h2>
            <p>
              If you have any questions or want to learn more about the KAMA
              Ministry, feel free to reach out to us.
            </p>
            <p>
              <strong>Email:</strong> kama@ackstpetersembakasi.org
              <br />
              <strong>Phone:</strong> 0110008603
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
              <h2 style={{ marginBottom: "10px" }}>Blogs</h2>
              <Blogs />
            </div>
            <div>
              <h2 style={{ marginBottom: "10px" }}>Member Testimony</h2>
              <p>
                Explore inspiring stories from our KAMA members about their
                journeys in faith, growth, and transformation. Each story
                highlights the power of faith in everyday life, offering
                encouragement and hope. Join us in celebrating the diverse paths
                within our church family.
              </p>
              <div>
                <ul className="devotional-list">
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
                  </li>
                </ul>
                <button>Share Your Story</button>
              </div>
            </div>
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

export default Men;
