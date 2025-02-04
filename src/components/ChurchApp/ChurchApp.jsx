import { useState, useEffect } from "react";
import "./ChurchApp.css";

const ChurchApp = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`announcement-bar ${!show ? "hide" : ""}`}>
      <div className="announcement-content">
        <span className="announcement-text">
          📱 Download our Church App for exclusive updates!
        </span>
        <a
          href="https://play.google.com/store/apps/details?id=com.ackstpeters.userapp&hl=en&gl=US&pli=1"
          target="_blank"
          rel="noreferrer"
          className="download-link"
        >
          Download Now
        </a>
      </div>
    </div>
  );
};

export default ChurchApp;
