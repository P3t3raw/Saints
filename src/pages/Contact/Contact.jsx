import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const titleLabels = {
    prayer: "Prayer Request",
    inquiry: "General Inquiry",
    booking: "Booking Appointment",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state

    // Prepare data to send with translated title
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: titleLabels[formData.title], // Use titleLabels for the title
      date: formData.date,
      time: formData.time,
    };

    emailjs
      .send(
        "service_syd4i5e", // Your service ID
        "template_j3b1d5s", // Your template ID
        templateParams, // Pass templateParams here
        "AHSm2-xqmc7ja_ikU" // Your public API key
      )
      .then(
        (result) => {
          setLoading(false);
          setMessage("Email sent successfully!");
          // Optionally clear the form here
          setFormData({
            name: "",
            email: "",
            message: "",
            title: "",
            date: "",
            time: "",
          });
        },
        (error) => {
          setLoading(false);
          setMessage("Failed to send email. Please try again.");
        }
      );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleTimeChange = (e) => {
    setFormData({ ...formData, time: e.target.value });
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
          <form className="contact-form" onSubmit={sendEmail} ref={formRef}>
            <select
              name="title"
              value={formData.title}
              className="contact-select"
              required
              onChange={handleOptionChange}
            >
              <option value="" disabled>
                Select message title
              </option>
              <option value="prayer">Prayer Request</option>
              <option value="inquiry">General Inquiry</option>
              <option value="booking">Booking Appointment</option>
            </select>

            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>

            {formData.title === "booking" && (
              <>
                <label>Select Date:</label>
                <DatePicker
                  selected={formData.date ? new Date(formData.date) : null}
                  onChange={(date) => setFormData({ ...formData, date })}
                  placeholderText="Pick a date"
                  required
                />
                <label>Select Time:</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleTimeChange}
                  required
                >
                  <option value="" disabled>
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
            )}

            {formData.title !== "booking" && (
              <label>
                Message:
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </label>
            )}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
          {message && <p className="feedback-message">{message}</p>}
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
