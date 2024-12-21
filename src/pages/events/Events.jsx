import "./Events.css";
import Reveal from "../../utils/Reveal";
import { FaChevronRight } from "react-icons/fa";
// import Worship from "../../assets/motivate.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import image2 from "../../assets/worshipNight.jpg";
import image1 from "../../assets/IMG-20241213-WA0010.jpg";

function AllEvents() {
  const events = [
    // {
    //   id: 1,
    //   imgSrc: image1,
    //   title: "Join Us For Celebration Sunday",
    //   desc: " Join our youth retreat for a weekend of spiritual growth, fellowship, and fun. We'll have inspiring sessions, worship, and outdoor activities.",
    //   date: "30th June, 2024 ",
    //   time: "8:00 am - 9:30 am",
    //   location: "ACK St.Peter's Embakasi",
    // },
    {
      id: 1,
      imgSrc: image1,
      title: "Christmas Carols",
      desc: " Join our youth retreat for a weekend of spiritual growth, fellowship, and fun. We'll have inspiring sessions, worship, and outdoor activities.",
      date: "15th December, 2024",
      time: "10:00 AM ",
      location: "ACK St.Peter's Embakasi",
    },
    
    {
      id: 2,
      imgSrc: image2,
      title: "CrossOver Worship Night",
      desc: "Come worship together as we lift our voices in praise. An evening of music, prayer, and reflection.",
      date: "31st December, 2024",
      time: "10:00 PM",
      location: "ACK St.Peter's Embakasi",
    },
    
  ];

  return (
    <div>
      <div className="eventsBackground">
        <div className="eventsOverlay"></div>
        <div className="eventsContent">
          <h1>Discover Our  Events</h1>
        </div>
        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <a href="/">Home</a> <FaChevronRight />
            </span>
            <span>
              Events <FaChevronRight />
            </span>
          </p>
          <h1>Events</h1>
        </div>
      </div>
      <div className="actualEvents">
        {events.map((event, index) => (
          <Reveal key={event.id} triggerOnce delay={index * 500}>
            <div className="singleEvent">
              <img src={event.imgSrc} alt="event" />
              <div className="singleEventContent">
                <h2>{event.title}</h2>
                <span>{event.desc}</span>
                <span>
                  <FaRegCalendarAlt />
                  {event.date}
                </span>
                <span>
                  {" "}
                  <MdOutlineAccessTime /> {event.time}
                </span>
                <span>
                  {" "}
                  <FaLocationDot />
                  {event.location}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default AllEvents;
