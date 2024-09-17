import "./Events.css";
import Reveal from "../../utils/Reveal";
import { FaChevronRight } from "react-icons/fa";
// import Worship from "../../assets/motivate.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import Picnic from "../../assets/picnic.jpg";
import Luncheon from "../../assets/luncheon.jpg";
import Retreat from "../../assets/youthretreat.jpg";
import Motivate from "../../assets/worshipTeam.jpg";

function AllEvents() {
  const events = [
    {
      id: 1,
      imgSrc: Motivate,
      title: "Join Us For Celebration Sunday",
      desc: " Join our youth retreat for a weekend of spiritual growth, fellowship, and fun. We'll have inspiring sessions, worship, and outdoor activities.",
      date: "30th June, 2024 ",
      time: "8:00 am - 9:30 am",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 1,
      imgSrc: Retreat,
      title: "Youth Retreat: Renew & Refresh",
      desc: " Join our youth retreat for a weekend of spiritual growth, fellowship, and fun. We'll have inspiring sessions, worship, and outdoor activities.",
      date: "Saturday, July 3, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Ngong hills",
    },
    {
      id: 2,
      imgSrc: Luncheon,
      title: "Senior Citizens Luncheon",
      desc: "Our beloved seniors are invited to a special luncheon. Lets celebrate their wisdom, share stories, and enjoy a delicious meal together.",
      date: "Wednesday, June 30, 2024",
      time: "12:00 PM - 2:00 PM",
      location: "Fellowship Hall",
    },
    {
      id: 3,
      imgSrc: Motivate,
      title: "Worship Night",
      desc: "Come worship together as we lift our voices in praise. An evening of music, prayer, and reflection.",
      date: "Friday, June 18, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 4,
      imgSrc: Picnic,
      title: "Community Picnic",
      desc: "Join us for a fun-filled community picnic! Bring your family and friends for games, food, and fellowship.",
      date: "Saturday, June 12, 2024",
      time: "11:00 AM - 3:00 PM",
      location: "ACK St.Peter's Embakasi",
    },
  ];

  return (
    <div>
      <div className="eventsBackground">
        <div className="eventsOverlay"></div>
        <div className="eventContent">
          <h1>Discover our Exciting Events</h1>
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
