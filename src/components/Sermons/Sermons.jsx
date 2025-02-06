import { FaYoutube } from "react-icons/fa";
import "./Sermons.css";
export default function Sermons() {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/Kh3YqW719Uc?si=qtz8o4gtmhJsXfor?rel=0",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/lZioFUvxgQ8?si=P-Q38JfAsc09UcKU?rel=0",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/lXxCbyxdSx0?si=Nm-6KAv-3FmTsruM?rel=0",
    },
  ];
  return (
    <div className="sermons">
      <div className="servicesTop">
        <p className="text">
          <span className="greyLine"></span>
          <span className="textPrimary" style={{ color: "grey" }}>
            Sermons
          </span>
          <span className="greyLine"></span>
        </p>
        <h1>Recent Sermons</h1>
        <p style={{ color: "grey" }}></p>
      </div>
      <div className="wrapperContainer">
        <div className="sermonsWrapper">
          {videos.map((video) => (
            <div
              className="recentVideo1"
              key={video.id}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "50rem",
                margin: "auto",
                height: "32vh",
              }}
            >
              <iframe
                style={{ width: "100%", height: "100%", border: "0" }}
                src={video.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <a
          href="https://www.youtube.com/channel/UC5CFyFU9qik5jUPFRiVgS7Q"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="sermonsBtn">
            <FaYoutube /> Watch More
          </button>
        </a>
      </div>
    </div>
  );
}
