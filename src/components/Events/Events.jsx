import "./Events.css";
import { FaRegCalendarAlt } from "react-icons/fa";

import { MdLocationCity } from "react-icons/md";
import image1 from "../../assets/bg2.jpg";
import image2 from "../../assets/IMG-20241213-WA0010.jpg";
import image3 from "../../assets/altar.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      imgSrc: image2,
      title: "Christmas Service",
      date: "25th, Dec 2024 ",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 2,
      imgSrc: image1,
      title: "The Crossover night worhip and prayer",
      date: "31st, Dec 2024 ",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 3,
      imgSrc: image3,
      title: "New Year Service",
      date: "1st, Jan 2025 ",
      location: "ACK St.Peter's Embakasi",
    },
    // {
    //   id: 1,
    //   imgSrc: image1,
    //   title: "The Crossover night worhip and prayer",
    //   date: "31st, December 2024 ",
    //   location: "ACK St.Peter's Embakasi",
    // },
  ];
  // const displayedEvents = events.slice(0, 2);
  return (
    <div className="container">
      <div className="events">
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
