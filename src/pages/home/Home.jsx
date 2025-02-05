import "./Home.css";
import Reveal from "../../utils/Reveal";
import Services from "../../components/Services/Services";
import Sermons from "../../components/Sermons/Sermons";
import Events from "../../components/Events/Events";
import video1 from "../../assets/2025-01-19 10.21.40.mp4";
import video2 from "../../assets/2025-01-26 10.09.09.mp4";
import video3 from "../../assets/2025-01-19 10.30.45.mp4";
import { useEffect, useRef, useState } from "react";

const videos = [video1, video2, video3];
function Home() {
  const [previousIndex, setPreviousIndex] = useState(null);
  const homeVideoRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentVideo = homeVideoRef.current[currentIndex];
    const prevVideo =
      previousIndex !== null ? homeVideoRef.current[previousIndex] : null;

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    currentVideo.onended = handleVideoEnd;

    return () => {
      if (currentVideo) {
        currentVideo.onended = null;
      }
    };
  }, [currentIndex, previousIndex]);
  return (
    <main>
      <div className="background">
        <div className="overlay"></div>
        {videos.map((src, index) => (
          <video
            key={index}
            ref={(el) => {
              if (el) homeVideoRef.current[index] = el;
            }}
            className={`videoHome ${index === currentIndex ? "active" : ""}`}
            src={src}
            muted
            playsInline
          ></video>
        ))}

        <div className="content">
          <p className="text">
            <span className="whiteLine"></span>
            <span className="textPrimary">Theme of the Year 2025</span>
            <span className="whiteLine"></span>
          </p>
          <p className="themeText">
            <b>The year of open doors and divine speed</b>
          </p>
        </div>
      </div>
      <Reveal>
        <div className="midSection">
          <div className="quoteText">
            <p className="text">
              <span className="darkLine"></span>
              <span className="heading">Quote of the week</span>
              <span className="darkLine"></span>
            </p>
            <p className="Quote">
              ❝ Doing the right thing, at the right place, and at the right time
              ensures a future free from regrets. It's about more than just
              making ethical choices; it's understanding how context and timing
              shape outcomes.❞
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Sermons />
      </Reveal>
      <Reveal>
        <Events />
      </Reveal>
      <Reveal>
        <div className="contact">
          <h1>Do you need Counselling, Prayer...</h1>
          <p>
            Reach out to us now for assistance on your journey to emotional and
            spiritual well-being.
          </p>
          <p className="contactText">
            <span>
              Call or message us at:{" "}
              <small style={{ color: "blue", fontSize: "16px" }}>
                0746 339 588
              </small>
            </span>
          </p>
        </div>
      </Reveal>
    </main>
  );
}

export default Home;
