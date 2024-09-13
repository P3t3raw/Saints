import { useRef } from "react";
import { FaYoutube } from "react-icons/fa";
import "./Sermons.css";
export default function Sermons() {
  const iframeRef = useRef(null);

  const handleFullscreen = () => {
    // Exit any fullscreen mode first
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari, Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }

    // Then enter fullscreen mode for the current container
    if (iframeRef.current) {
      const container = iframeRef.current.parentNode;
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) {
        // Firefox
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) {
        // Chrome, Safari, and Opera
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        // IE/Edge
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
        <h1 style={{ fontSize: "40px" }}>Recent Sermons</h1>
        <p style={{ color: "grey" }}></p>
      </div>
      <div className="sermonsWrapper">
        <div
          className="recentVideo1"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            margin: "auto",
            height: "30vh",
          }}
        >
          <iframe
            ref={iframeRef}
            style={{ width: "100%", height: "100%", border: "0" }}
            src="https://www.youtube.com/embed/Fqxl48C920U?si=8T3cyES4FlZil59l"
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
        <div
          className="recentVideo1"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            margin: "auto",
            height: "30vh",
          }}
        >
          <iframe
            ref={iframeRef}
            style={{ width: "100%", height: "100%", border: "0" }}
            src="https://www.youtube.com/embed/5h06r98XKPE?si=Rz866WIneW9hbHgq"
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
        <div
          className="recentVideo1"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            margin: "auto",
            height: "30vh",
          }}
        >
          <iframe
            ref={iframeRef}
            style={{ width: "100%", height: "100%", border: "0" }}
            src="https://www.youtube.com/embed/nC1Iimsbepw?si=dzURXZ1XOMP25uZj"
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
