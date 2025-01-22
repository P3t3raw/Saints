import "./Children.css";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import Reveal from "../../../utils/Reveal";
import image1 from "../../../assets/WhatsApp Image 2024-12-22 at 12.53.56_4ac63e6a.jpg";
// import Blogs from "../../../components/Blogs/Blogs";
import { useRef } from "react";
// import image2 from "../../../assets/WhatsApp Image 2024-12-22 at 12.53.56_8549e219.jpg";
// import image3 from "../../../assets/WhatsApp Image 2024-12-22 at 12.54.41_3e9bbbd2.jpg";
// import image4 from "../../../assets/WhatsApp Image 2024-12-22 at 12.54.42_7c626b81.jpg";
// import image5 from "../../../assets/WhatsApp Image 2024-12-22 at 12.54.42_573c252c.jpg"

function Children() {
  const iframeRef = useRef(null);

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
              ❝ Jesus said, 'Let the little children come to me, and do not
              hinder them, for the Kingdom of heaven belongs to such as these.'❞
              <br />
              <span style={{ color: "#a7a7a7" }}>Matthew 19:14</span>
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
            <ul style={{ padding: "0", marginBlock:'0px', marginTop:'5px' }}>
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
              <strong>Phone:</strong>
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
                <div >
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
                <div className="wrapperContainer">
                  <div className="sermonsWrapper">
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
                        ref={iframeRef}
                        style={{ width: "100%", height: "100%", border: "0" }}
                        src="https://www.youtube.com/embed/zeuoPQznpFo?si=d4JHh6-w8mUDbwap"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                      ></iframe>
                      <button
                        style={{
                          position: "absolute",
                          bottom: "16px",
                          right: "24px",
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                          zIndex: "10",
                          background: "transparent",
                          border: "none",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      ></button>
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
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Children;
