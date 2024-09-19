import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import churchImage from "../../assets/church1.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  const churchLocation = [-1.3076028456483761, 36.91171768994212];
  return (
    <div>
      <div className="aboutBackground">
        <div className="aboutOverlay"></div>
        <div className="aboutContent">
          <h1>Contact Us</h1>
        </div>
        <div className="aboutBreadCrumbsWrapper">
          <p className="aboutBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Contact Us <FaChevronRight />
            </span>
          </p>
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <select
              className="contact-select"
              required
              onChange={handleOptionChange}
            >
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

            {selectedOption === "booking" ? (
              <>
                <label>Select Date:</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Pick a date"
                  required
                />
                <label>Select Time:</label>
                <select
                  value={selectedTime}
                  onChange={handleTimeChange}
                  required
                >
                  <option value="" disabled selected>
                    Select a time
                  </option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                </select>
              </>
            ) : (
              <label>
                Message:
                <textarea placeholder="Your Message" required></textarea>
              </label>
            )}

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          {/* <p>
            We would love to hear from you. Please reach out to us through any
            of the methods below.
          </p> */}
          <div className="contact-details">
            <h2>Our Contact Information</h2>
            <p>
              <strong>Address:</strong> P.O Box 40539 - 13356, Nairobi
            </p>
            <p>
              <strong>Phone:</strong> 0110008603
            </p>
            <p>
              <strong>Email:</strong> info@ackstpetersembakasi.org
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
              <Marker position={churchLocation}>
                <Popup>
                  <div className="pin">
                    <img
                      className="img-style"
                      src={churchImage} // Assuming the first image is the primary one
                      alt="church"
                    />

                    <div>
                      <strong>ACK St. Peter's Embakasi</strong>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
