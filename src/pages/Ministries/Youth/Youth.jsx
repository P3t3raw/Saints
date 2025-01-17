import "./Youth.css";
import Reveal from "../../../utils/Reveal";
import { Link } from "react-router-dom";
import Blogs from "../../../components/Blogs/Blogs";
import { FaRegHeart } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import fridayService from "../../../assets/YouthMinistry2.jpg";
import youth1 from "../../../assets/YouthMinistry6.jpg";
import youth2 from "../../../assets/stpetersfc.jpg";
import youth4 from "../../../assets/youthMin.jpg";
import youth3 from "../../../assets/YouthMinistry1.jpg";
import youth5 from "../../../assets/stpetersfc1.jpg";
import { useRef } from "react";
export default function Youth() {
  const iframeRef = useRef(null);
  return (
    <div>
      <div className="background">
        <div className="overlay"></div>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/5365060/5365060-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>

        <video
          className="video"
          src="https://videos.pexels.com/video-files/6860419/6860419-hd_1280_720_25fps.mp4"
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
          <h1>Youth Ministry</h1>
        </div>
      </div>
      <Reveal>
        <div className="row1Container">
          <div className="row1">
            <div>
              <p className="textQuote">
                ❝ Don&apos;t let anyone look down on you because you are young,
                but set an example for the believers in speech, in conduct, in
                love, in faith, and in purity.❞
                <br />
                <span style={{ color: "#a7a7a7" }}>~ 1 Timothy 4:12 ~</span>
              </p>
            </div>
            <img src={youth4} alt="Youth" />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="row2">
          <div>
            <div>
              <h2>Empowering the Next Generation of Believers</h2>
              <p className="row2Text">
                The Youth Ministry is a dynamic and inclusive community for
                teenagers and young adults. Our mission is to empower young
                people to grow in their faith, build lasting friendships, and
                make a positive impact in their world.
              </p>
              {
                <p className="row2Text">
                  Through weekly youth meetings, Bible studies, social events,
                  and service projects, we provide opportunities for spiritual
                  growth, leadership development, and fun.
                  <br />
                  Our youth leaders are dedicated to mentoring and supporting
                  each individual as they navigate the challenges of adolescence
                  and young adulthood.
                </p>
              }
              <h2>What we do in Youth&apos;s Ministry?</h2>
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
                    We provide engaging and age-appropriate Bible lessons that
                    help children understand God&apos;s Word in a fun and
                    interactive way.
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
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <FaRegHeart style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    We teach children the importance of serving others, sharing
                    God&apos;s love in the process, and making a positive impact
                    in the world around them.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or want to learn more about the Men's
              Ministry, feel free to reach out to us.
            </p>
            <p>
              <strong>Email:</strong> youth@ackstpetersembakasi.org
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
      </Reveal>
      <Reveal>
        <div className="row4Container">
          <div className="row4">
            <div>
              <h2>Blogs</h2>
              <Blogs />
            </div>
            <div>
              <h2>Youths Corner</h2>
              <p>
                Stay tuned for inspiring videos and podcasts filled with fresh
                ideas and uplifting content. Check back often for updates!
              </p>
              <div className="wrapperContainer">
                <div className="sermonsWrapper">
                  <div
                    className="recentVideo1"
                    // key={video.id}
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
                      src="https://www.youtube.com/embed/I-npl3MvBIk?si=4XN4XSa0O6jmqAu9"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      // allowFullscreen
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
                      // onClick={handleFullscreen}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="row3">
          {/* styles are from children ministry page */}
          <div>
            <img src={fridayService} alt="worship" />
          </div>
          <div>
            <img src={youth1} alt="worship" />
          </div>
          <div>
            <img src={youth2} alt="worship" />
          </div>
          <div>
            <img src={youth3} alt="worship" />
          </div>
          <div>
            <img src={youth5} alt="worship" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
