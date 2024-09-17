import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbMailbox } from "react-icons/tb";
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
              <MdOutlinePhone /> <span>0110 008 603 (Prayer Line)</span>
            </li>
            <li>
              <MdOutlineEmail /> <span>info@ackstpetersembakasi.org</span>
            </li>
          </ul>
          <div>
            <ul className="socialLinks">
              <li className="social">
                <FaFacebookF />
              </li>
              <li className="social">
                <FaTwitter />
              </li>
              <li className="social">
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
        <div className="giveSection">
          <h2>Give</h2>
          <ul className="list serviceHours">
            <li>
              <span>Main Church Paybill</span>
              <span>: 70 17 84</span>
              <small>ACC NO: OFFERTORY/TITHE/THANKSGIVING</small>
            </li>
            <li>
              <span>Development Paybill: 70 17 90</span>
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
            Copyright &copy; 2024. All rights reserved
          </small>
          <span className="greyLine"></span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
