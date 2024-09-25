import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./Sermon.css";

export default function Sermons() {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/Fqxl48C920U?si=8T3cyES4FlZil59l",
      title: "Revelation",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/5h06r98XKPE?si=Rz866WIneW9hbHgq",
      title: "Revelation",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/nC1Iimsbepw?si=dzURXZ1XOMP25uZj",
      title: "Revelation",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/nC1Iimsbepw?si=dzURXZ1XOMP25uZj",
      title: "Revelation",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/nC1Iimsbepw?si=dzURXZ1XOMP25uZj",
      title: "Revelation",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/nC1Iimsbepw?si=dzURXZ1XOMP25uZj",
      title: "Revelation",
    },
  ];
  const iframeRef = useRef(null);
  return (
    <div>
      <div className="noticesBackground">
        <div className="noticesOverlay"></div>
        <div className="noticesContent">
          <h1>Scriptural Teachings and Sermons</h1>
        </div>
        <div className="noticesBreadCrumbsWrapper">
          <p className="noticesBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Sermons <FaChevronRight />
            </span>
          </p>
          <h1>Sermons</h1>
        </div>
      </div>
      <div className="sermonWrapperContainer">
        <div className="sermonsWrapper">
          {videos.map((video) => (
            <div className="sermonCard" key={video.id}>
              <iframe
                ref={iframeRef}
                style={{ width: "100%", height: "100%", border: "0" }}
                src={video.src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerPolicy="strict-origin-when-cross-origin"
                // allowFullscreen
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
