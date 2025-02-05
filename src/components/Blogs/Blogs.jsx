import { useState } from "react";
import "./Blogs.css";

export default function Blogs({ ministry }) {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      ministry: "Youth",
      title: "Empowering the Next Generation",
      desc: "Discover how faith can shape the future of young people...",
      fullContent:
        "The youth are the backbone of any church, and it is our responsibility to empower them with faith, wisdom, and purpose. Through regular fellowship, mentorship, and engaging discussions, we encourage young believers to take charge of their spiritual growth. This blog explores ways to inspire youth to actively participate in church, community service, and personal development through faith.",
      imgSrc:
        "https://images.pexels.com/photos/167446/pexels-photo-167446.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      ministry: "Kama",
      title: "Building Strong Christian Families",
      desc: "How men can lead and nurture their families spiritually...",
      fullContent:
        "The Kenya Anglican Men's Association (KAMA) plays a vital role in strengthening Christian families. This blog explores how men can be spiritual leaders in their households, instilling values of love, discipline, and faith in their families. It also discusses the importance of brotherhood, mentorship, and actively engaging in church activities to lead by example.",
      imgSrc:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      ministry: "Mothers Union",
      title: "A Woman’s Role in the Church and Community",
      desc: "Embracing the call to nurture, inspire, and serve...",
      fullContent:
        "The Mother's Union is a powerful force in the church, providing spiritual and emotional support to families and communities. This blog delves into the various ways women can contribute to church growth, community service, and mentoring young girls in faith. We discuss the importance of prayer, fellowship, and charitable work in making a difference.",
      imgSrc:
        "https://images.pexels.com/photos/935944/pexels-photo-935944.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      ministry: "Youth",
      title: "The Challenges of Faith in the Digital Age",
      desc: "Navigating social media and technology with Christian values...",
      fullContent:
        "In today's world, social media and technology have become integral to our daily lives. However, they also present challenges to young Christians trying to stay true to their faith. This blog discusses how to use technology wisely, avoid online distractions, and remain strong in faith while engaging with the digital world.",
      imgSrc:
        "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      ministry: "Kama",
      title: "The Role of Christian Men in Society",
      desc: "Leading with integrity, responsibility, and faith...",
      fullContent:
        "Christian men have a duty to be role models in society. This blog explores how men can uphold Christian values in the workplace, community, and family. It highlights the importance of mentorship, accountability, and standing firm in faith while navigating the responsibilities of daily life.",
      imgSrc:
        "https://images.pexels.com/photos/4668075/pexels-photo-4668075.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      ministry: "Mothers Union",
      title: "Raising Godly Children in a Changing World",
      desc: "Instilling faith and values in the next generation...",
      fullContent:
        "Parenting in today's fast-changing world comes with challenges. This blog discusses how mothers can instill Christian values in their children, ensuring they grow up with a strong moral foundation. Topics include the power of prayer, teaching scripture, and leading by example to nurture a faithful generation.",
      imgSrc:
        "https://images.pexels.com/photos/3986992/pexels-photo-3986992.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  // Filter blogs by ministry (e.g., show only Youth blogs when imported in Youth Page)
  const filteredBlogs = blogs.filter((blog) => blog.ministry === ministry);

  return (
    <div className="blogsWrapper">
      {filteredBlogs.map((blog) => (
        <div
          key={blog.id}
          className="blogCard"
          onClick={() => setSelectedBlog(blog)}
        >
          <img src={blog.imgSrc} alt="blog" className="blogPic" />
          <div className="blogContent">
            <h3 className="blogTitle">{blog.title}</h3>
            <p className="blogDesc">{blog.desc}</p>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedBlog && (
        <div className="modalOverlay" onClick={() => setSelectedBlog(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <span className="closeButton" onClick={() => setSelectedBlog(null)}>
              &times;
            </span>
            <img src={selectedBlog.imgSrc} alt="blog" className="modalImage" />
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.fullContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
