import { Link } from "react-router-dom";
import "./PraiseTeam.css";
import { FaRegHeart } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import worshipImg from "../../../assets/worshipTeam.jpg";
import worshipImg2 from "../../../assets/swahiliService.jpg";
import worshipImg3 from "../../../assets/YouthMinistry5.jpg";
import worshipImg4 from "../../../assets/youthService.jpg";
import worshipImg5 from "../../../assets/englishService.jpg";
export default function PraiseTeam() {
  return (
    <div>
      <div className="background">
        <div className="overlay"></div>

        <video
          className="video"
          src="https://videos.pexels.com/video-files/6860452/6860452-hd_1280_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/7520507/7520507-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/8775627/8775627-sd_640_360_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Ministries <FaChevronRight />
            </span>
          </p>
          <h1>Choir & Praise team</h1>
        </div>
      </div>
      {/* <div className="row1">
        <div>
          <p className="textQuote">
            ❝ I will praise you as long as I live, and in your name I will lift
            up my hands.❞{" "}
            <span style={{ color: "#a7a7a7" }}>~ Psalms 63:4 ~</span>
          </p>
        </div>
        <img src={worshipImg} alt="KAMA" />
      </div>
      <div className="worshipRow2">
        <h2>Who we are</h2>
        <p>
          We are a family of worshipers, seeking to know God and make Him known
          through new, authentic songs of worship and praise. We believe that
          the greatest calling of every individual is to worship. The Bible also
          describes musical and artistic expression as a powerful form of
          worship. As we glorify God in worship, we enter His presence and our
          lives are changed.
        </p>
      </div>
      <div className="worshipRow3">
        <h2>Want to join the worship team?</h2>
        <ul>
          <li>
            Fill out the application form with your details and musical
            experience.
          </li>
          <li>
            Join us for a meeting to learn more about the team and ask
            questions.
          </li>
          <li>Showcase your skills in a brief audition.</li>
          <li>
            Attend rehearsals regularly to grow with the team and contribute to
            worship.
          </li>
        </ul>
      </div> */}
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
      <div className="row2">
        <div>
          <h2>About Music Ministry</h2>
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
          <h2>What we do in Music Ministry?</h2>
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
        {/* styles are from children ministry page */}
        <div>
          <img src={worshipImg5} alt="worship" />
        </div>
        <div>
          <img src={worshipImg} alt="worship" />
        </div>
        <div>
          <img src={worshipImg2} alt="worship" />
        </div>
        <div>
          <img src={worshipImg3} alt="worship" />
        </div>
        <div>
          <img src={worshipImg4} alt="worship" />
        </div>
      </div>
    </div>
  );
}
