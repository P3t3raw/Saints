import { Link } from "react-router-dom";
import "../Children/Children.css";
import { FaMicrophone } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
import { BiMusic } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import worshipImg from "../../../assets/worshipTeam.jpg";
import worshipImg2 from "../../../assets/swahiliService.jpg";
import worshipImg3 from "../../../assets/choir.JPG";
import worshipImg4 from "../../../assets/IMG_6807.JPG";
import worshipImg5 from "../../../assets/IMG_6804.JPG";
import Reveal from "../../../utils/Reveal";
import { GiGuitar } from "react-icons/gi";
export default function PraiseTeam() {
  return (
    <div>
      <div className="background">
        <div className="overlay"></div>

        <video
          className="video"
          src="https://videos.pexels.com/video-files/6860452/6860452-hd_1280_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/7520507/7520507-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/8775627/8775627-sd_640_360_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Ministries <FaChevronRight />
            </span>
          </p>
          <h1>Choir & Praise team</h1>
        </div>
      </div>
      {/* <div className="row1">
        <div>
          <p className="textQuote">
            ❝ I will praise you as long as I live, and in your name I will lift
            up my hands.❞{" "}
            <span style={{ color: "#a7a7a7" }}>~ Psalms 63:4 ~</span>
          </p>
        </div>
        <img src={worshipImg} alt="KAMA" />
      </div>
      <div className="worshipRow2">
        <h2>Who we are</h2>
        <p>
          We are a family of worshipers, seeking to know God and make Him known
          through new, authentic songs of worship and praise. We believe that
          the greatest calling of every individual is to worship. The Bible also
          describes musical and artistic expression as a powerful form of
          worship. As we glorify God in worship, we enter His presence and our
          lives are changed.
        </p>
      </div>
      <div className="worshipRow3">
        <h2>Want to join the worship team?</h2>
        <ul>
          <li>
            Fill out the application form with your details and musical
            experience.
          </li>
          <li>
            Join us for a meeting to learn more about the team and ask
            questions.
          </li>
          <li>Showcase your skills in a brief audition.</li>
          <li>
            Attend rehearsals regularly to grow with the team and contribute to
            worship.
          </li>
        </ul>
      </div> */}
      <div className="row1Container">
        <div className="row1">
          <div>
            <p className="textQuote">
              ❝ I have no greater joy than to hear that my children are walking
              in the truth.❞
              <br />
              <span style={{ color: "#a7a7a7" }}>3 John 1:4</span>
            </p>
          </div>
          <img
            src="https://i.pinimg.com/originals/00/82/1e/00821e92f02ac1b3a7527601a6ff9dab.jpg"
            alt="sunday school"
          />
        </div>
      </div>
      <Reveal>
        <div className="row2">
          <div>
            <div>
              <h2>About the Music Ministry</h2>
              <p className="row2Text">
                The Music Ministry at St. Peters plays a vital role in creating
                an atmosphere of worship and adoration. Composed of the Praise
                and Worship Team and the Church Choir, we seek to glorify God
                through music, leading the congregation into His presence during
                services and special events.
              </p>
              <p className="row2Text">
                Our mission is to use our musical gifts to uplift, inspire, and
                bring the message of hope and salvation through Christ. Whether
                it’s a powerful hymn, a heartfelt worship song, or a joyful
                chorus, we aim to touch lives and draw hearts closer to God.
              </p>
              <h2>What we do in the Music Ministry?</h2>
              <ul style={{ padding: "0" }}>
                <li
                  style={{
                    display: "flex",
                    marginBlockEnd: "10px",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <BiMusic style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    Lead the congregation in worship during Sunday services,
                    ensuring a meaningful and spirit-filled experience.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    marginBlockEnd: "10px",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <FaMicrophone
                    style={{ fontSize: "40px", color: "#1f2837" }}
                  />
                  <span>
                    Prepare and perform special music for events such as
                    weddings, funerals, and church celebrations.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <GiGuitar style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    Organize rehearsals to develop musical skills and harmonies,
                    fostering unity among team members.
                  </span>
                </li>
              </ul>
            </div>
            
          </div>
          <div>
            <h2>Upcoming Events</h2>
            <ul className="events">
              <li>
                <strong>Worship Night</strong> - Dec 20, 2024
                <p>
                  Join us for an evening of worship and praise featuring our
                  Praise and Worship Team and Choir. Let’s come together to
                  glorify God in song.
                </p>
              </li>
              <li>
                <strong>Christmas Cantata</strong> - Dec 25, 2024
                <p>
                  Celebrate the birth of Christ with a special musical
                  presentation by the Church Choir. A night of hymns, carols,
                  and joy awaits.
                </p>
              </li>
              <li>
                <strong>Choir Retreat</strong> - Jan 15-17, 2025
                <p>
                  A weekend of bonding, vocal training, and spiritual growth for
                  choir members. Don’t miss this enriching experience!
                </p>
              </li>
              <li>
                <strong>Music Workshop</strong> - Feb 10, 2025
                <p>
                  A hands-on workshop for all Music Ministry members to enhance
                  their musical skills and worship leadership.
                </p>
              </li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For more information about the Music Ministry or to join, feel
              free to reach out. We look forward to serving with you!
            </p>
            <p>
              <strong>Email:</strong> musicministry@churchwebsite.com
              <br />
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
        </div>
      </Reveal>

      <div className="row3">
        {/* styles are from children ministry page */}
        <div>
          <img src={worshipImg5} alt="worship" />
        </div>
        <div>
          <img src={worshipImg} alt="worship" />
        </div>
        <div>
          <img src={worshipImg2} alt="worship" />
        </div>
        <div>
          <img src={worshipImg3} alt="worship" />
        </div>
        <div>
          <img src={worshipImg4} alt="worship" />
        </div>
      </div>
    </div>
  );
}
