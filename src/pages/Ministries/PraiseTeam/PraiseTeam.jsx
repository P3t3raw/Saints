import "./PraiseTeam.css";
import { Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import { BiMusic } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import worshipImg from "../../../assets/worshipTeam.jpg";
import worshipImg2 from "../../../assets/IMG_6804.JPG";
import worshipImg3 from "../../../assets/choir.JPG";
import worshipImg4 from "../../../assets/IMG_6807.JPG";
import worshipImg5 from "../../../assets/swahiliService.jpg";
import Reveal from "../../../utils/Reveal";
import { GiGuitar } from "react-icons/gi";
import image from "../../../assets/2025-01-26 14.03.10.jpg";
import video1 from "../../../assets/2025-01-26 10.15.15.mp4";
import video2 from "../../../assets/2025-01-26 10.32.50.mp4";
import performance from "../../../assets/2025-01-26 10.15.15.mp4";
import { useEffect, useRef, useState } from "react";

const musicVideos = [video2, video1];
export default function PraiseTeam() {
  const [previousIndex, setPreviousIndex] = useState(null);
  const videoRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentVideo = videoRef.current[currentIndex];
    const prevVideo =
      previousIndex !== null ? videoRef.current[previousIndex] : null;

    if (prevVideo) {
      prevVideo.classList.add("fading");
      setTimeout(() => {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }, 1500);
    }

    if (currentVideo) {
      currentVideo.classList.add("active");
      currentVideo.classList.remove("fading");
      currentVideo.play();
      currentVideo.playbackRate = 0.7;
    }

    const handleVideoEnd = () => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % musicVideos.length);
    };

    currentVideo.onended = handleVideoEnd;

    return () => {
      if (currentVideo) {
        currentVideo.onended = null;
      }
    };
  }, [currentIndex, previousIndex]);
  return (
    <div>
      <div className="background">
        <div className="childrenMinistryOverlay"></div>

        {musicVideos.map((src, index) => (
          <video
            key={index}
            ref={(el) => (videoRef.current[index] = el)}
            className={`videoMusic ${index === currentIndex ? "active" : ""}`}
            src={src}
            muted
            playsInline
          ></video>
        ))}

        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Ministries <FaChevronRight />
            </span>
            <span>
              Music Ministry <FaChevronRight />
            </span>
          </p>
          <h1>Choir & Praise team</h1>
        </div>
      </div>
      <div className="row1Container">
        <div className="row1">
          <div>
            <p className="textQuote">
              ❝ Let everything that has breath praise the Lord. Praise the
              Lord.❞
              <br />
              <span style={{ color: "#a7a7a7" }}>Psalm 150:6</span>
            </p>
          </div>
          <img src={image} alt="music ministry" />
        </div>
      </div>
      <Reveal>
        <div className="row2">
          <div>
            <div>
              <h2>About the Music Ministry</h2>
              <p className="row2Text">
                The Music Ministry at St. Peters plays a vital role in creating
                an atmosphere of worship and adoration. Composed of the Praise
                and Worship Team and the Church Choir, we seek to glorify God
                through music, leading the congregation into His presence during
                services and special events.
              </p>
              <p className="row2Text">
                Our mission is to use our musical gifts to uplift, inspire, and
                bring the message of hope and salvation through Christ. Whether
                it’s a powerful hymn, a heartfelt worship song, or a joyful
                chorus, we aim to touch lives and draw hearts closer to God.
              </p>
              <h2>What we do in the Music Ministry?</h2>
              <ul style={{ padding: "0" }}>
                <li
                  style={{
                    display: "flex",
                    marginBlockEnd: "10px",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <BiMusic style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    Lead the congregation in worship during Sunday services,
                    ensuring a meaningful and spirit-filled experience.
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
                  <FaMicrophone
                    style={{ fontSize: "40px", color: "#1f2837" }}
                  />
                  <span>
                    Prepare and perform special music for events such as
                    weddings, funerals, and church celebrations.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <GiGuitar style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    Organize rehearsals to develop musical skills and harmonies,
                    fostering unity among team members.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Contact Us</h2>
            <p>
              For more information about the Music Ministry or to join, feel
              free to reach out. We look forward to serving with you!
            </p>
            <p>
              <strong>Email:</strong> musicministry@ackstpetersembakasi.org
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
      </Reveal>
      <Reveal>
        <div className="row4Container">
          <div className="row4">
            <div>
              <h2>Featured Song</h2>
              <p>
                Stay tuned for inspiring videos and podcasts filled with fresh
                ideas and uplifting content. Check back often for updates!
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
                      src="https://www.youtube-nocookie.com/embed/7MW64-5ugHc?si=XyZbWCwMRpIBWG7Y&rel=0"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Our Performance</h2>
              <p>
                Stay tuned for inspiring videos and podcasts filled with fresh
                ideas and uplifting content. Check back often for updates!
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
                    <video
                      style={{ width: "100%", height: "100%", border: "0" }}
                      src={performance}
                      controls
                    ></video>
                    {/* <iframe
                      style={{ width: "100%", height: "100%", border: "0" }}
                      src="https://www.youtube-nocookie.com/embed/8cOaGbBfhd8?si=TAz8Yo-O6CvD9GAb&rel=0"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

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
