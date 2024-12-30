import "./Home.css";
import Reveal from "../../utils/Reveal";
import Services from "../../components/Services/Services";
import Sermons from "../../components/Sermons/Sermons";
import Events from "../../components/Events/Events";
function Home() {
  return (
    <main>
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
          src="https://videos.pexels.com/video-files/3191109/3191109-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="content">
          <p className="text">
            <span className="whiteLine"></span>
            <span className="textPrimary">Theme of the Year 2024</span>
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
            <span>
              Get us on Facebook at:{" "}
              <a
                href="https://web.facebook.com/stpetersembakasi/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <small
                  style={{ color: "blue", fontSize: "16px", cursor: "pointer" }}
                >
                  web.facebook.com/stpetersembakasi
                </small>
              </a>
            </span>
          </p>
        </div>
      </Reveal>
    </main>
  );
}

export default Home;
