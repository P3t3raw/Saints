import { useRef } from "react";
import { FaYoutube } from "react-icons/fa";
import "./Sermons.css";
export default function Sermons() {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/8cOaGbBfhd8?si=TAz8Yo-O6CvD9GAb",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/WqweBHlECaA?si=gHvcXjQ8cVNCMcxd",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/ncOfKE4lPmU?si=xULeIzgcBjp2n3hT",
    },
  ];

  const iframeRef = useRef(null);

  const handleFullscreen = () => {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    if (iframeRef.current) {
      const container = iframeRef.current.parentNode;
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    }
  };

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
                height: "30vh",
              }}
            >
              <iframe
                ref={iframeRef}
                style={{ width: "100%", height: "100%", border: "0" }}
                src={video.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerPolicy="strict-origin-when-cross-origin"
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
                onClick={handleFullscreen}
              ></button>
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
