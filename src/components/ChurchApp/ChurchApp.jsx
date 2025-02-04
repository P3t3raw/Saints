import { useState, useEffect } from "react";
import "./ChurchApp.css";

const ChurchApp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500); // Show after 0.5s delay

    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`announcement-bar ${visible ? "visible" : ""}`}>
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
