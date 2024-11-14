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
            <h2>About Children&apos;s Ministry</h2>
            <p className="row2Text">
              At St. Peters, our KAMA Men's Ministry is committed to empowering
              men to grow in their faith, build strong relationships, and serve
              as leaders within their families, church, and community.{" "}
            </p>
            <p className="row2Text">
              We believe that each man has a unique purpose in God’s plan, and
              our ministry provides a supportive environment where men can
              deepen their understanding of Scripture, strengthen their walk
              with Christ, and encourage one another in their spiritual journey.
            </p>
          </div>
          <div>
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
                  We engage in service projects that reflect God’s love, making
                  a positive impact in our church and surrounding communities.
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
                  We support men in developing their roles as spiritual leaders
                  in their homes and work to model a life of integrity and
                  faith.
                </span>
              </li>
            </ul>
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
