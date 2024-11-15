import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./Welfare.css";

export default function Welfare() {
  const programDetails = {
    title: "Welfare",
    overview: "Providing immediate financial relief for families in crisis",
    objectives: [
      "Assist families in financial crisis",
      "Provide rent and utility support",
      "Offer help with medical expenses",
      "Ensure well-being of community members in urgent need",
    ],
    targetAudience:
      "Church members and local residents experiencing unexpected financial hardship",
    description:
      "Our Emergency Financial Aid Program aims to offer quick financial assistance to individuals and families in need of support during times of crisis. Whether it’s help with rent, medical bills, or utilities, we are here to provide temporary relief and guidance.",
    aidTypes: [
      "Rent payment assistance",
      "Utility bill support",
      "Medical expenses",
      "Transportation costs",
      "Food vouchers",
    ],
    applicationProcess:
      "Contact our office at (555) 123-4567 or email welfare@church.org to apply. Submit required documentation and explain your crisis situation.",
    timeline:
      "Available year-round with funds disbursed within 48 hours of approval.",
    volunteerOpportunities: [
      "Help with application processing",
      "Donate to the fund",
      "Volunteer during fundraising events",
    ],
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
    partners: ["Local businesses", "Community outreach programs"],
    gallery: [
      "https://bacc.cc/wp-content/uploads/2023/11/gallery-tgs-tall.jpg",
      "https://bacc.cc/wp-content/uploads/2023/11/gallery-tgs-tall.jpg",
    ],
    cta: "Donate to our Emergency Financial Aid Program today!",
    contact: { email: "welfare@church.org", phone: "(555) 123-4567" },
    updates: ["Fundraising drive for the upcoming quarter: Goal - $10,000"],
    budget: { goal: "10,000 USD", raised: "5,000 USD" },
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
            <ul>
              {programDetails.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Recent Updates</h2>
            <ul>
              {programDetails.updates.map((update, index) => (
                <li key={index}>{update}</li>
              ))}
            </ul>
          </div>
          {/* <div>
            <h2>Program Budget</h2>
            <p>Goal: {programDetails.budget.goal}</p>
            <p>Raised: {programDetails.budget.raised}</p>
          </div>
          <div>
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
            <h2>How to Apply</h2>
            <p>{programDetails.applicationProcess}</p>
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
          <div className="ctaSection">
            <h2>{programDetails.cta}</h2>
            <button
              onClick={() =>
                (window.location.href = `mailto:${programDetails.contact.email}`)
              }
            >
              Donate or Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
