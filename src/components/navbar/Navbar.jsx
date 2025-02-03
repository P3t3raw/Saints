import { useEffect, useState } from "react";
import Logo from "../../assets/LogoP.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoChevronDown, IoClose, IoMenu } from "react-icons/io5";

function Navbar() {
  const [programsActive, setProgramsActive] = useState(false);
  const [ministriesActive, setMinistriesActive] = useState(false);
  const [active, setActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [ministries, setMinistries] = useState(false);
  const [programs, setPrograms] = useState(false);
  const [about, setAbout] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className="overalContainer">
      <div className={active ? "navContainer active" : "navContainer"}>
        <nav>
          <Link to="/" className="link">
            <div className="logoName">
              <img src={Logo} className="logo" alt="church logo" />
              <h3> ACK ST. PETER&apos;S EMBAKASI</h3>
            </div>
          </Link>
          <div className="menu" onClick={() => setMenuActive((prev) => !prev)}>
            {!menuActive && <IoMenu style={{ fontSize: "26px" }} />}
          </div>
          <div className="links">
            <ul className="navLinks">
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li
                className={`about ${about ? "selected" : ""}`}
                onClick={() => setAbout((prev) => !prev)}
              >
                <Link to="/about-us">About</Link>
              </li>
              <li
                className={`ministries ${ministries ? "selected" : ""}`}
                onClick={() => setMinistries((prev) => !prev)}
                onMouseLeave={() => setMinistries(false)}
              >
                Ministries
                <span className="arrow"></span>
                <ul className="ministriesWrapper">
                  <li>
                    <Link to="/ministries/kama-ministry">K.A.M.A.</Link>
                  </li>
                  <li>
                    <Link to="/ministries/mothers-union">Mother's Union</Link>
                  </li>
                  <li>
                    <Link to="/ministries/youth-ministry">Youth Ministry</Link>
                  </li>
                  <li>
                    <Link to="/ministries/sunday-school">Sunday School</Link>
                  </li>
                  <li>
                    <Link to="/ministries/music-ministry">Music Ministry</Link>
                  </li>
                  <li>
                    <Link to="/ministries/tee">T.E.E</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/notices">Notices</Link>
              </li>
              <li
                className={`ministries ${programs ? "selected" : ""}`}
                onClick={() => setPrograms((prev) => !prev)}
                onMouseLeave={() => setPrograms(false)}
              >
                Programs
                <span className="arrow"></span>
                <ul className="ministriesWrapper">
                  <li>
                    <Link to="/programs/welfare">Welfare</Link>
                  </li>
                  <li>
                    <Link to="/programs/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/programs/fellowships">Fellowships</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <aside className={`aside ${menuActive ? "active" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "1rem",
          }}
        >
          <img src={Logo} className="logo" alt="church logo" />
          <IoClose
            style={{ fontSize: "1.5rem" }}
            onClick={() => setMenuActive(false)}
          />
        </div>
        <ul>
          <li onClick={() => setMenuActive(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMenuActive(false)}>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <div
              onClick={() => setMinistriesActive(!ministriesActive)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span>Ministries</span>
              <IoChevronDown
                style={{ marginLeft: "0.4rem", fontSize: "0.7rem" }}
              />
            </div>
            {ministriesActive && (
              <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                <li onClick={() => setMenuActive(false)}>
                  <Link to="/ministries/kama-ministry">K.A.M.A.</Link>
                </li>
                <li onClick={() => setMenuActive(false)}>
                  <Link to="/ministries/mothers-union">Mother's Union</Link>
                </li>
                <li onClick={() => setMenuActive(false)}>
                  <Link to="/ministries/youth-ministry">Youth Ministry</Link>
                </li>
                <li onClick={() => setMenuActive(false)}>
                  <Link to="/ministries/sunday-school">Sunday School</Link>
                </li>
                <li onClick={() => setMenuActive(false)}>
                  <Link to="/ministries/music-ministry">Music Ministry</Link>
                </li>{" "}
                <li onClick={() => setMenuActive(false)}>
                  <Link to="/ministries/tee">T.E.E</Link>
                </li>{" "}
              </ul>
            )}
          </li>

          <li onClick={() => setMenuActive(false)}>
            <Link to="/events">Events</Link>
          </li>
          <li onClick={() => setMenuActive(false)}>
            <Link to="/notices">Notices</Link>
          </li>
          <li>
            <div
              onClick={() => setProgramsActive(!programsActive)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span>Programs</span>
              <IoChevronDown
                style={{ marginLeft: "0.4rem", fontSize: "0.7rem" }}
              />
            </div>
            {programsActive && (
              <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                <li onClick={() => setMenuActive(false)}>
                  <Link to="/programs/welfare">Welfare</Link>
                </li>
                <li onClick={() => setMenuActive(false)}>
                  <Link to="/programs/projects">Projects</Link>
                </li>
                <li onClick={() => setMenuActive(false)}>
                  <Link to="/programs/fellowships">Fellowships</Link>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => setMenuActive(false)}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Navbar;
