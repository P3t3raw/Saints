import "./Children.css";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import Reveal from "../../../utils/Reveal";
import image from "../../../assets/00821e92f02ac1b3a7527601a6ff9dab.jpg";
import image1 from "../../../assets/WhatsApp Image 2024-12-22 at 12.53.56_4ac63e6a.jpg";
import image2 from "../../../assets/2025-01-19 10.03.38.jpg";
import image3 from "../../../assets/2025-01-19 10.03.18.jpg";
import image4 from "../../../assets/IMG-20250123-WA0025.jpg";
import image5 from "../../../assets/2025-01-19 10.03.07.jpg";
import video1 from "../../../assets/VID-20250123-WA0043.mp4";
import video2 from "../../../assets/2025-01-19 09.47.16.mp4";
import video3 from "../../../assets/2025-01-19 09.56.27.mp4";
import { useEffect, useRef } from "react";

function Children() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);
  return (
    <div>
      <div className="background">
        <div className="childrenMinistryOverlay"></div>
        <video
          ref={videoRef}
          className="videoChildren"
          src={video1}
          autoPlay
          muted
          loop
        ></video>
        <video
          ref={videoRef}
          className="videoChildren"
          src={video2}
          autoPlay
          muted
          loop
        ></video>
        <video
          ref={videoRef}
          className="videoChildren"
          src={video3}
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
              Sunday School <FaChevronRight />
            </span>
          </p>
          <h1>Sunday School</h1>
        </div>
      </div>
      <div className="row1Container">
        <div className="row1SundaySchool">
          <div>
            <p className="textQuote">
              ❝ Jesus said, 'Let the little children come to me, and do not
              hinder them, for the Kingdom of heaven belongs to such as these.'❞
              <br />
              <span style={{ color: "#a7a7a7" }}>Matthew 19:14</span>
            </p>
          </div>
          <img src={image} alt="sunday school" />
        </div>
      </div>

      <Reveal>
        <div className="row2">
          <div>
            <h2>About the Sunday School Ministry</h2>
            <p className="row2Text">
              At St. Peters, our ministry is committed to nurturing the
              spiritual growth of all age groups, with a special focus on
              children, teens, and youth in the Brigade. Our Sunday School
              provides a safe, fun, and engaging environment where children can
              discover God’s love and His purpose for their lives. Teens are
              guided to navigate life’s challenges through Biblical teachings
              and practical lessons that inspire them to build a strong personal
              faith. The Brigade focuses on character-building, discipline, and
              service, helping young people develop leadership skills grounded
              in Christian values.
            </p>
            <p className="row2Text"></p>
            <h2>What we do in the Sunday School Ministry?</h2>
            <ul style={{ padding: "0", marginBlock: "0px", marginTop: "5px" }}>
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
                  We teach Bible lessons tailored to different age groups,
                  ensuring that children understand the Word of God and its
                  relevance to their lives.
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
                  We organize fun and interactive activities, such as crafts,
                  games, and storytelling, to reinforce the lessons learned in a
                  creative way.
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
                  We encourage children to grow in their faith, develop
                  Christian values, and live out their faith at home, school,
                  and beyond.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p className="contactUsText">
              For more information about the Sunday School Ministry, feel free
              to reach out to us. We’d love to hear from you!
            </p>
            <p>
              <strong>Email:</strong> sundayschool@ackstpetersembakasi.org
              <br />
              <strong>Phone:</strong>0110 008 603
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
        <Reveal>
          <div className="row4Container">
            <div className="row4">
              <div>
                <h2>Short Stories</h2>
                <div>
                  <ul className="devotional-list">
                    <li>
                      <h4>Upcoming Devotional Piece</h4>
                      <p>
                        Dive into an inspiring and thought-provoking discussion
                        that challenges your perspectives and stimulates deep
                        thinking. This week's piece encourages reflection and
                        invites you to explore new ideas, share your insights,
                        and join a meaningful conversation with others. Don’t
                        miss out on the chance to engage with content that truly
                        matters.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2>Children's Corner</h2>
                <p>
                  Stay tuned for inspiring videos filled with fresh ideas and
                  uplifting content. Check back often for updates!
                </p>
                <div>
                  <div>
                    <div
                      className="recentVideo1"
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "50rem",
                        margin: "1.5rem auto",
                        height: "40vh",
                        borderRadius: "1rem",
                      }}
                    >
                      <iframe
                        style={{ width: "100%", height: "100%", border: "0" }}
                        src="https://www.youtube-nocookie.com/embed/zeuoPQznpFo?si=d4JHh6-w8mUDbwap&rel=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Reveal>
      <div className="row3">
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
        <div>
          <img src={image5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Children;
