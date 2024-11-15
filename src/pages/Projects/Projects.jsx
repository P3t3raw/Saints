import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  const projects = [
    // {
    //   id: 1,
    //   title: "Mission Trip to Honduras",
    //   overview:
    //     "Join us as we support communities in Honduras through building, teaching, and ministry.",
    //   objectives: [
    //     "Build essential infrastructure",
    //     "Provide educational resources",
    //     "Spread the message of hope and faith",
    //   ],
    //   targetAudience:
    //     "Church members and volunteers with a heart for mission work",
    //   description:
    //     "Our mission trip will focus on constructing homes, providing school supplies, and leading spiritual workshops in rural areas. Volunteers will work closely with local community leaders to make a lasting impact.",
    //   timeline: "September 1 - September 14, 2024",
    //   location: "Tegucigalpa, Honduras",
    //   team: [
    //     "Pastor Luke Harrison - Mission Director",
    //     "Maria Santos - Outreach Coordinator",
    //   ],
    //   involvementOptions: [
    //     "Volunteer for the trip",
    //     "Sponsor a volunteer",
    //     "Donate supplies",
    //   ],

    //   partners: ["Honduras Mission Network", "Global Outreach Organization"],
    //   gallery: ["mission_trip1.jpg", "mission_trip2.jpg"],
    //   cta: "Support the Mission Trip to Honduras",
    //   contact: { email: "missions@church.org", phone: "(555) 111-2222" },
    //   updates: ["Fundraising event: Spaghetti dinner on August 10"],
    //   budget: { goal: "20,000 USD", raised: "12,500 USD" },
    // },
    {
      id: 2,
      title: "Building a Sunday School Block",
      overview:
        "A community project to build a dedicated block for Sunday school activities, providing a safe and inspiring space for children to learn and grow in faith.",
      objectives: [
        "Construct a safe and welcoming learning environment for children",
        "Provide classrooms, restrooms, and a small play area",
        "Foster spiritual growth and community involvement",
      ],
      targetAudience:
        "Church members, local families, and volunteers who value children's education and spiritual development",
      description:
        "This project aims to build a new block specifically for Sunday school classes, equipped with classrooms, restrooms, and a play area. This space will create a dedicated environment for children to learn biblical lessons and participate in community-building activities.",
      timeline: "January 1 - June 30, 2024",
      location: "Church Grounds, Springfield Community",
      team: [
        "Pastor Mark Adams - Project Leader",
        "Sarah Lee - Sunday School Coordinator",
        "John Doe - Construction Supervisor",
      ],
      involvementOptions: [
        "Volunteer for construction work",
        "Sponsor building materials",
        "Donate educational supplies",
      ],

      partners: ["Springfield Builders", "Faith in Action Foundation"],
      gallery: ["sunday_school_block1.jpg", "sunday_school_block2.jpg"],
      cta: "Support the Sunday School Block Project",
      contact: {
        email: "projects@church.org",
        phone: "(555) 333-4444",
      },
      updates: [
        "Groundbreaking ceremony on January 1, 2024",
        "Fundraising goal: Ksh. 150,000",
      ],
      budget: {
        goal: "Ksh. 150,000",
        raised: "Ksh. 55,000",
      },
    },
    {
      title: "Music for the Soul: Teaching Kids to Play Instruments",
      overview:
        "An initiative to introduce young children to the joy of music through hands-on instrument lessons, helping them develop new skills and a deeper connection to their faith through music.",
      objectives: [
        "Teach foundational skills for instruments like guitar, piano, and drums",
        "Encourage self-expression and creativity through music",
        "Build a supportive community for young musicians to grow in faith and talent",
      ],
      targetAudience:
        "Children aged 6-12 in the church community and surrounding neighborhood",
      description:
        "This program offers beginner-level music classes for children, focusing on popular instruments such as guitar, piano, and drums. Classes will be taught by experienced musicians from the congregation, aiming to inspire kids and foster a love for music that complements their spiritual growth.",
      timeline: "March 1 - August 31, 2024",
      location: "Church Music Room and Community Hall",
      team: [
        "Laura Jenkins - Music Program Coordinator",
        "David Kim - Guitar Instructor",
        "Emma Lopez - Piano Instructor",
        "Michael Brown - Drum Instructor",
      ],
      involvementOptions: [
        "Volunteer as an instructor or assistant",
        "Donate musical instruments or accessories",
        "Sponsor a child’s participation in the program",
      ],
      partners: ["Local Music Shop", "Harmony Music Foundation"],
      gallery: ["music_class1.jpg", "music_class2.jpg"],
      cta: "Support the Music for the Soul Program",
      contact: {
        email: "music@church.org",
        phone: "(555) 444-5555",
      },
      updates: [
        "Open enrollment starts February 10, 2024",
        "First class begins March 1, 2024",
      ],
      budget: {
        goal: "Ksh. 70,000",
        raised: "Ksh. 25,000 ",
      },
    },
  ];

  return (
    <div>
      <div className="noticesBackground">
        <div className="noticesOverlay"></div>
        <div className="noticesContent">
          <h1>Projects</h1>
        </div>
        <div className="noticesBreadCrumbsWrapper">
          <p className="noticesBreadCrumbs">
            <span>
              <Link to="/">Home</Link> <FaChevronRight />
            </span>
            <span>
              Projects <FaChevronRight />
            </span>
          </p>
          <h1>Projects</h1>
        </div>
      </div>

      <div className="projectsContainer">
        {projects.map((project) => (
          <div key={project.id} className="projectCard">
            <h2>{project.title}</h2>
            <p className="projectOverview">{project.overview}</p>
            <h3>Objectives:</h3>
            <ul>
              {project.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
            <h3>Description:</h3>
            <p>{project.description}</p>
            <h3>Details:</h3>
            <p>
              <strong>Timeline:</strong> {project.timeline}
            </p>
            <p>
              <strong>Location:</strong> {project.location}
            </p>
            <p>
              <strong>Target Audience:</strong> {project.targetAudience}
            </p>
            <h3>Team:</h3>
            <ul>
              {project.team.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
            <h3>Involvement Options:</h3>
            <ul>
              {project.involvementOptions.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
            <h3>Partners:</h3>
            <ul>
              {project.partners.map((partner, index) => (
                <li key={index}>{partner}</li>
              ))}
            </ul>
            <h3>Contact:</h3>
            <p>
              Email:{" "}
              <a href={`mailto:${project.contact.email}`}>
                {project.contact.email}
              </a>
            </p>
            <p>Phone: {project.contact.phone}</p>
            <h3>Budget:</h3>
            <p>Goal: {project.budget.goal}</p>
            <p>Raised: {project.budget.raised}</p>
            <h3>Updates:</h3>
            <ul>
              {project.updates.map((update, index) => (
                <li key={index}>{update}</li>
              ))}
            </ul>
            <Link to={`/projects/${project.id}`} className="learnMoreButton">
              {project.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
