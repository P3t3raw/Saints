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
      <div className="row2">
        <div>
          <h2>About Mothers&apos; Ministry</h2>
          <p className="row2Text">
            At St.Peters, our Children&apos;s Ministry is dedicated to nurturing
            the spiritual growth of children from infancy through elementary
            school.{" "}
          </p>
          <p className="row2Text">
            We believe that every child is a precious gift from God, and we
            strive to create a loving and supportive environment where they can
            learn about Jesus and develop a personal relationship with Him.
          </p>
        </div>
        <div>
          <h2>What we do in Mothers&apos; Union?</h2>
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
                We provide engaging and age-appropriate Bible lessons that help
                children understand God&apos;s Word in a fun and interactive
                way.
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
                We offer a safe and welcoming environment where children can
                build friendships and enjoy fellowship with their peers.
              </span>
            </li>
            <li
              style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}
            >
              <FaRegHeart style={{ fontSize: "40px", color: "#1f2837" }} />
              <span>
                We teach children the importance of serving others, sharing
                God&apos;s love in the process, and making a positive impact in
                the world around them.
              </span>
            </li>
          </ul>
        </div>
      </div>
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
