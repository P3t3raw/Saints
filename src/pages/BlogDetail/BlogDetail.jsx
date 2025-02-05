import { useParams } from "react-router-dom"; // To access the URL params
import { useMemo } from "react";

export default function BlogDetail() {
  const { id } = useParams(); // Get blog ID from URL

  const blogs = useMemo(
    () => [
      {
        id: 1,
        ministry: "children",
        imgSrc:
          "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Upcoming Blog for Children Ministry",
        desc: "Stay tuned for inspiring blogs filled with fresh ideas and uplifting content. Check back often for updates!",
      },
      {
        id: 2,
        ministry: "youth",
        imgSrc:
          "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Upcoming Blog for Youth Ministry",
        desc: "Stay tuned for inspiring blogs filled with fresh ideas and uplifting content. Check back often for updates!",
      },
      // Additional blogs...
    ],
    []
  );

  // Find the blog by ID
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blogDetail">
      <img src={blog.imgSrc} alt="blog" />
      <h1>{blog.title}</h1>
      <p>{blog.desc}</p>
    </div>
  );
}
