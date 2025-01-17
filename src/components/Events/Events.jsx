import "./Events.css";
import { FaRegCalendarAlt } from "react-icons/fa";

import { MdLocationCity } from "react-icons/md";
import image2 from "../../assets/Fasting.jpg";
import image1 from "../../assets/stpetersfc1.jpg";
import image3 from "../../assets/worshipTeam.jpg";
import image4 from "../../assets/JehovaJireh.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      imgSrc: image2,
      title: "21 Days of Prayer & Fasting",
      desc: " ",
      date: "15th December, 2024",
      time: "10:00 AM ",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 2,
      imgSrc: image4,
      title: "A Goodwill visit to Jehova Jireh children's Home",
      desc: "",
      date: "1st February, 2025",
      time: "10:00 am",
      location: "Jehova Jireh Children's Home Ruai",
    },
    {
      id: 3,
      imgSrc: image3,
      title: "Join Us For Celebration Sunday",
      desc: " Join our youth retreat for a weekend of spiritual growth, fellowship, and fun. We'll have inspiring sessions, worship, and outdoor activities.",
      date: "26th January, 2025 ",
      time: "8:00 am - 9:30 am",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 4,
      imgSrc: image1,
      title: "St. Peter's F.C Training",
      desc: " ",
      date: "T.B.D",
      time: "10:00 AM ",
      location: "ACK St.Peter's Embakasi",
    },
  ];
  // const displayedEvents = events.slice(0, 2);
  return (
    <div className="container">
      <div>
        <div className="servicesTop">
          <p className="text">
            <span className="greyLine"></span>
            <span className="textPrimary">Events</span>
            <span className="greyLine"></span>
          </p>
          <h1>Upcoming Events</h1>
        </div>
      </div>
      <div className="eventsWrapper">
        <div className="events-Container">
          <div className="events-list">
            {" "}
            {events.map((event) => (
              <div className="eventsCard" key={event.id}>
                <div className="eventWrapperOverlay"></div>
                <img src={event.imgSrc} alt="event" className="eventPic" />
                <div className="eventContent">
                  <div className="eventDetails">
                    <span>
                      <FaRegCalendarAlt />
                      {event.date}
                    </span>
                    <span>
                      <MdLocationCity />
                      {event.location}
                    </span>
                  </div>
                  <h2>{event.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
