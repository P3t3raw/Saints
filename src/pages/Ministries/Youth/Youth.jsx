import "../Children/Children.css";
import Reveal from "../../../utils/Reveal";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
import { BiBible, BiHomeHeart } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import fridayService from "../../../assets/YouthMinistry3.jpg";
import youth1 from "../../../assets/YouthMinistry6.jpg";
import youth2 from "../../../assets/youthMin.jpg";
import youth3 from "../../../assets/YouthMinistry1.jpg";
import youth5 from "../../../assets/youthMinistry.jpg";
export default function Youth() {
  return (
    <div>
      <div className="background">
        <div className="overlay"></div>
        <video
          className="video"
          src="https://videos.pexels.com/video-files/5365060/5365060-hd_1366_720_25fps.mp4"
          autoPlay
          muted
          loop
        ></video>

        <video
          className="video"
          src="https://videos.pexels.com/video-files/6860419/6860419-hd_1280_720_25fps.mp4"
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
          <h1>Youth Ministry</h1>
        </div>
      </div>
      <Reveal>
        <div className="row1Container">
          <div className="row1">
            <div>
              <p className="textQuote">
                ❝ Don&apos;t let anyone look down on you because you are young,
                but set an example for the believers in speech, in conduct, in
                love, in faith, and in purity.❞
                <br />
                <span style={{ color: "#a7a7a7" }}>~ 1 Timothy 4:12 ~</span>
              </p>
            </div>
            <img src={youth2} alt="Youth" />
          </div>
        </div>
      </Reveal>
      {/*<Reveal>
        <div className="row2">
          <div>
           
      {/*
          </div>
          <div>
           
          </div>
        </div>
      </Reveal> */}
      <Reveal>
        <div className="row2">
          <div>
            <div>
              <h2>Empowering the Next Generation of Believers</h2>
              <p className="row2Text">
                The Youth Ministry at A.C.K St. Peters Embakasi Church is a
                dynamic and inclusive community for teenagers and young adults.
                Our mission is to empower young people to grow in their faith,
                build lasting friendships, and make a positive impact in their
                world. Through weekly youth meetings, Bible studies, social
                events, and service projects, we provide opportunities for
                spiritual growth, leadership development, and fun.
              </p>
              {
                <p className="row2Text">
                  Our youth leaders are dedicated to mentoring and supporting
                  each individual as they navigate the challenges of adolescence
                  and young adulthood.
                  <br /> Join us and be part of a movement that is passionate
                  about Jesus and making a difference.
                </p>
              }
              <h2>What we do in Youth&apos;s Ministry?</h2>
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
                    We provide engaging and age-appropriate Bible lessons that
                    help children understand God&apos;s Word in a fun and
                    interactive way.
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
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <FaRegHeart style={{ fontSize: "40px", color: "#1f2837" }} />
                  <span>
                    We teach children the importance of serving others, sharing
                    God&apos;s love in the process, and making a positive impact
                    in the world around them.
                  </span>
                </li>
              </ul>
            </div>
            <h2>Get Involved</h2>
            <p>
              Our Men's Ministry offers a variety of ways to connect, grow, and
              serve. Whether you're looking for fellowship, mentorship, or
              opportunities to give back, there’s a place for you here.
            </p>
            <ul>
              <li>
                <strong>Volunteer for Events</strong>
                <p>
                  Help plan and execute events like retreats, breakfasts, and
                  service projects.
                </p>
              </li>

              <li>
                <strong>Support Outreach Projects</strong>
                <p>
                  Join initiatives to support our community through charity work
                  and service.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Upcoming Events</h2>
            <ul>
              <li>
                <strong>Men's Breakfast</strong> - Dec 25, 2024
                <p>
                  Join us for a hearty breakfast and fellowship. A guest speaker
                  will share an inspiring message about living a life of faith
                  and purpose.
                </p>
              </li>
              <li>
                <strong>Community Service Day</strong> - Jan 15, 2025
                <p>
                  Let’s give back to the community! We’ll be volunteering at the
                  local shelter to serve meals and provide support to those in
                  need.
                </p>
              </li>
              <li>
                <strong>Men’s Retreat</strong> - Feb 10-12, 2025
                <p>
                  A weekend retreat in the mountains focused on spiritual
                  growth, bonding, and relaxation. Don’t miss this opportunity
                  to recharge.
                </p>
              </li>
              <li>
                <strong>Leadership Workshop</strong> - Mar 5, 2025
                <p>
                  Enhance your leadership skills and learn how to lead
                  effectively in your family, church, and community.
                </p>
              </li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or want to learn more about the Men's
              Ministry, feel free to reach out to us.
            </p>
            <p>
              <strong>Email:</strong> mensministry@churchwebsite.com
              <br />
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="row3">
          {/* styles are from children ministry page */}
          <div>
            <img src={fridayService} alt="worship" />
          </div>
          <div>
            <img src={youth1} alt="worship" />
          </div>
          <div>
            <img src={youth2} alt="worship" />
          </div>
          <div>
            <img src={youth3} alt="worship" />
          </div>
          <div>
            <img src={youth5} alt="worship" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
