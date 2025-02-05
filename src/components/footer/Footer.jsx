import "./Footer.css";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { TbMailbox } from "react-icons/tb";
import churchAppIcon from "../../assets/LogoP.png";
import {
  MdOutlineLocationOn,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";

function Footer() {
  return (
    <footer>
      <section>
        <div className="findSection">
          <h2>Find Us</h2>
          <ul className="list contactInfo">
            <li>
              <TbMailbox /> <span>P.O Box 40539 - 13356</span>
            </li>
            <li>
              <MdOutlineLocationOn />
              <span>Embakasi Near Embakasi Post Office, Embakasi, Kenya</span>
            </li>
            <li>
              <MdOutlinePhone /> <span>0746 339 588 (Prayer Line)</span>
            </li>
            <li>
              <MdOutlineEmail /> <span>info@ackstpetersembakasi.org</span>
            </li>
          </ul>
          <div>
            <ul className="socialLinks">
              <li className="social">
                <a
                  href="https://web.facebook.com/stpetersembakasi/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <FaFacebookF />
                </a>
              </li>
              {/* <li className="social">
                <a
                  href="https://x.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    version="1.1"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </li> */}
              <li className="social">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ackstpeters.userapp&hl=en&gl=US&pli=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={churchAppIcon}
                    alt="Church App"
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
              </li>

              <li className="social">
                <a
                  href="https://www.youtube.com/channel/UC5CFyFU9qik5jUPFRiVgS7Q"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="giveSection">
          <h2>Give</h2>
          <ul className="list serviceHours">
            <li>
              <span>Main Church Paybill</span>
              <span>: 701 784</span>
              <small>A/C: OFFERTORY/TITHE/THANKSGIVING</small>
            </li>
            <li>
              <span>Development Paybill: 701 790</span>
              <small>ACC NO: SUNDAY SCHOOL BLOCK</small>
            </li>
            <li>
              <span>Welfare Paybill: 247 247</span>
              <small>ACC NO: 430400#YOURNAME</small>
            </li>
            <li>
              <span>Bank: Equity</span>
              <small>ACC NO: 0120291480391</small>
            </li>
            <li>
              <span>KAMA Paybill: 247 247</span>
              <small>808800#YOURNAME</small>
            </li>
            <li>
              <span>Ladies Paybill: 247 247</span>
              <small>ACC NO: ackmu#yourname</small>
            </li>
          </ul>
        </div>
      </section>
      <div>
        <p className="footer">
          <span className="greyLine"></span>
          <small className="textPrimary">
            Copyright &copy; 2025. All rights reserved
          </small>
          <span className="greyLine"></span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
