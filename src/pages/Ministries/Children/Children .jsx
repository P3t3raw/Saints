import "./Children.css";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import Reveal from "../../../utils/Reveal";

function Children() {
  return (
    <div>
      <div className="background">
        <div className="childrenMinistryOverlay"></div>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/3191109/3191109-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/7568735/7568735-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="eventsBreadCrumbsWrapper">
          <p className="eventsBreadCrumbs">
            <span>
              <a href="/">Home</a> <FaChevronRight />
            </span>
            <span>
              Ministries <FaChevronRight />
            </span>
            <span>
              Children Ministry <FaChevronRight />
            </span>
          </p>
          <h1>Children Ministry</h1>
        </div>
      </div>
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
      {/* <div className="row2">
        <div>
          <h2>About Children&apos;s Ministry</h2>
          <p className="row2Text">
            At St.Peters, our Children&apos;s Ministry is dedicated to nurturing
            the spiritual growth of children from infancy through elementary
            school.{" "}
          </p>
          <p className="row2Text">
            We believe that every child is a precious gift from God, and we
            strive to create a loving and supportive environment where they can
            learn about Jesus and develop a personal relationship with Him.
          </p>
        </div>
        <div>
          <h2>What we do in Children&apos;s Ministry?</h2>
          <ul style={{ padding: "0" }}>
            <li
              style={{
                display: "flex",
                marginBlockEnd: "10px",
                gap: "8px",
                alignItems: "flex-start",
              }}
            >
              <BiBible style={{ fontSize: "40px", color: "#1f2837" }} />
              <span>
                We provide engaging and age-appropriate Bible lessons that help
                children understand God&apos;s Word in a fun and interactive
                way.
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
              <BiHomeHeart style={{ fontSize: "40px", color: "#1f2837" }} />
              <span>
                We offer a safe and welcoming environment where children can
                build friendships and enjoy fellowship with their peers.
              </span>
            </li>
            <li
              style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}
            >
              <FaRegHeart style={{ fontSize: "40px", color: "#1f2837" }} />
              <span>
                We teach children the importance of serving others, sharing
                God&apos;s love in the process, and making a positive impact in
                the world around them.
              </span>
            </li>
          </ul>
        </div>
      </div> */}
      <Reveal>
        <div className="row2">
          <div>
            <div>
              <h2>About the Sunday School Ministry</h2>
              <p className="row2Text">
                At St. Peters, our Sunday School Ministry is dedicated to
                nurturing the spiritual growth of children and equipping them
                with a solid foundation in faith. We strive to provide a safe,
                fun, and engaging environment where children can learn about
                God's love and His purpose for their lives.
              </p>
              <p className="row2Text">
                Our ministry focuses on teaching Biblical truths in a way that
                is relatable and exciting for children, helping them to build
                strong spiritual habits and develop a personal relationship with
                Jesus.
              </p>
              <h2>What we do in the Sunday School Ministry?</h2>
              <ul style={{ padding: "0" }}>
                <li
                  style={{
                    display: "flex",
                    marginBlockEnd: "10px",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <BiBible style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    We teach Bible lessons tailored to different age groups,
                    ensuring that children understand the Word of God and its
                    relevance to their lives.
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
                  <BiHomeHeart style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    We organize fun and interactive activities, such as crafts,
                    games, and storytelling, to reinforce the lessons learned in
                    a creative way.
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <FaRegHeart style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    We encourage children to grow in their faith, develop
                    Christian values, and live out their faith at home, school,
                    and beyond.
                  </span>
                </li>
              </ul>
            </div>
            <h2>Get Involved</h2>
            <p>
              The Sunday School Ministry welcomes volunteers, parents, and
              anyone passionate about guiding children in their spiritual
              journey. Join us to make a difference in the lives of the next
              generation.
            </p>
            <ul>
              <li>
                <strong>Volunteer as a Teacher</strong>
                <p>
                  Lead or assist in teaching classes, sharing God’s Word with
                  children, and helping them grow spiritually.
                </p>
              </li>
              <li>
                <strong>Support Ministry Events</strong>
                <p>
                  Help organize and execute special events such as Vacation
                  Bible School, Christmas plays, and outreach programs.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Upcoming Events</h2>
            <ul>
              <li>
                <strong>Christmas Play Rehearsal</strong> - Dec 15, 2024
                <p>
                  Join us as we prepare for the annual Christmas play. Children
                  of all ages are welcome to participate and showcase their
                  talents.
                </p>
              </li>
              <li>
                <strong>Sunday School Picnic</strong> - Jan 20, 2025
                <p>
                  A day of fun, games, and fellowship for children and their
                  families at the local park.
                </p>
              </li>
              <li>
                <strong>Bible Memory Challenge</strong> - Feb 5, 2025
                <p>
                  An exciting competition to encourage children to memorize and
                  understand key Bible verses.
                </p>
              </li>
              <li>
                <strong>Vacation Bible School</strong> - Mar 25-29, 2025
                <p>
                  A week-long program filled with Bible stories, songs, crafts,
                  and activities designed to deepen children’s love for Christ.
                </p>
              </li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For more information about the Sunday School Ministry, feel free
              to reach out to us. We’d love to hear from you!
            </p>
            <p>
              <strong>Email:</strong> sundayschool@churchwebsite.com
              <br />
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
        </div>
      </Reveal>

      <div className="row3">
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/08/ltn-gallery-square-01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/08/ltn-gallery-wide-01.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/11/gallery-tgs-tall.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/11/gallery-friends-outside-02.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://bacc.cc/wp-content/uploads/2023/08/ltn-gallery-square-02.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Children;
