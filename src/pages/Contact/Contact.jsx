import "./Contact.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

const customIcon = new L.Icon({
  iconUrl: require("../../assets/church1.jpg"), // Custom church icon image (change this path)
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function Contact() {
  const churchLocation = [-1.3076028456483761, 36.91171768994212];
  return (
    <div>
      <div className="aboutBackground">
        <div className="aboutOverlay"></div>
        <div className="aboutContent">
          <h1>Get to Know Us</h1>
        </div>
        <div className="aboutBreadCrumbsWrapper">
          <p className="aboutBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              About <FaChevronRight />
            </span>
          </p>
          <h1>About</h1>
        </div>
      </div>

      <div className="contact-container">
        <p>
          We would love to hear from you. Please reach out to us through any of
          the methods below.
        </p>

        <div className="contact-info">
          <div className="contact-details">
            <h2>Our Contact Information</h2>
            <p>
              <strong>Address:</strong> 123 Church Lane, City, Country
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Email:</strong> info@churchname.org
            </p>
          </div>

          <div className="contact-map">
            {/* Placeholder for Google Maps */}
            <h2>Find Us</h2>
            <MapContainer
              center={churchLocation}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "300px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={churchLocation} icon={customIcon}>
                <Popup>
                  <div className="pin">
                    <img
                      className="img-style"
                      src="../../assets/church1.jpg" // Assuming the first image is the primary one
                      alt="church"
                    />

                    <div>
                      <strong>ACK St. Peter's</strong>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <select className="contact-select" required>
              <option value="" disabled selected>
                Select message title
              </option>
              <option value="prayer">Prayer Request</option>
              <option value="inquiry">General Inquiry</option>
              <option value="booking">Booking Appointment</option>
            </select>
            <label>
              Name:
              <input type="text" placeholder="Your Name" required />
            </label>

            <label>
              Email:
              <input type="email" placeholder="Your Email" required />
            </label>

            <label>
              Message:
              <textarea placeholder="Your Message" required></textarea>
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
