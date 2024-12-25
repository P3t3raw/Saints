import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./Welfare.css";

export default function Welfare() {
  const programDetails = {
    title: "ACK St. Peter's Church Embakasi Welfare Association",
    overview:
      "A non-political, non-sectarian, voluntary self-Help group of members",
    objectives: [
      "To mobilize members of ACK St Peters Embakasi church and individuals to share and participate in aspects of weddings and bereavement.",
      "To be a forum where members support each other financially, socially, emotionally, mentally and spiritually when necessary.",
      "To promote church development",
      "To do all such other things as are incidental or conducive to the attainment of all or any of the foregoing objectives.",
    ],
    qualifications: [
      "Be aged 18 years and above.",
      "Contributor must be a registered member of ACK St. Peter's Church Embakasi and active member of the relevant estate fellowship.",
      "New members of the church shall be admitted to the welfare after 60 days since the date of registration as members of the Church.",
      "A grace period of three months from the date of registration to be able to qualify for any benefits.",
      "Be a person of a sound mind",
      "Be willing to abide by all the rules and regulations of the Associtation.",
    ],
    description:
      "ACK St. Peter's Church Embakasi Welfare Association aims to offer quick financial assistance to individuals and families in need of support during times of crisis.",

    applicationProcess:
      "Visit the church office or contact us at 0110008603 to apply.",

    testimonials: [
      {
        quote:
          "The church’s support kept my family in our home during a difficult time. We are forever grateful.",
        name: "Sarah, Recipient",
      },
      {
        quote:
          "This program gave me the hope I needed to get back on my feet after a job loss. Thank you for the quick help!",
        name: "James, Recipient",
      },
    ],

    gallery: [
      "https://bacc.cc/wp-content/uploads/2023/11/gallery-tgs-tall.jpg",
      "https://bacc.cc/wp-content/uploads/2023/11/gallery-tgs-tall.jpg",
    ],
    contact: { email: "welfare@church.org", phone: "(555) 123-4567" },
    updates: [
      "All members are urged to settle their arrears.",
      "The committee wishes you merry christmas and a happy new year 2025!",
    ],
  };

  return (
    <div>
      <div className="welfareBackground">
        <div className="welfareOverlay"></div>
        <div className="welfareContent">
          <h1>{programDetails.title}</h1>
          <p>{programDetails.overview}</p>
        </div>
        <div className="breadCrumbsWrapper">
          <p className="breadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Welfare <FaChevronRight />
            </span>
          </p>
        </div>
      </div>

      <div className="welfareMainContent">
        <div className="leftWelfarePart">
          {" "}
          <div>
            <h2>About the Program</h2>
            <p>{programDetails.description}</p>
          </div>
          <div>
            <h2>Program Objectives</h2>
            <ol>
              {programDetails.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2>Membership Qualifications</h2>
            <ol>
              {programDetails.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ol>
          </div>
          {/*<div>
            <h2>Gallery</h2>
            <div className="gallery">
              {programDetails.gallery.map((image, index) => (
                <img
                  key={index}
                  src={`images/${image}`}
                  alt={`Event ${index + 1}`}
                />
              ))}
            </div>
          </div> */}
        </div>
        <div className="rightWelfarePart">
          <div>
            <h2>Recent Updates</h2>
            <ol className="welfareUpdates">
              {programDetails.updates.map((update, index) => (
                <li key={index}>{update}</li>
              ))}
            </ol>
          </div>

          <div>
            <h2>Testimonials</h2>
            {programDetails.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <blockquote>"{testimonial.quote}"</blockquote>
                <p>- {testimonial.name}</p>
              </div>
            ))}
          </div>
          <div>
            <h2>How to Become A Member</h2>
            <p>{programDetails.applicationProcess}</p>
          </div>
          <div className="ctaSection">
            <h2>{programDetails.cta}</h2>
            <button
              onClick={() =>
                (window.location.href = `mailto:${programDetails.contact.email}`)
              }
            >
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
