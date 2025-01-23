import "./Blogs.css";
import { useMemo } from "react";

export default function Blogs() {
  const blogs = useMemo(
    () => [
      {
        id: 1,
        imgSrc:
          "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Upcoming Blog",
        desc: "Stay tuned for inspiring blogs filled with fresh ideas and uplifting content. Check back often for updates!",
      },
      {
        id: 2,
        imgSrc:
          "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Upcoming Blog",
        desc: "Stay tuned for inspiring blogs filled with fresh ideas and uplifting content. Check back often for updates!",
      },

      //   {
      //     id: 4,
      //     imgSrc:
      //       "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
      //     title: "Upcoming Blog",
      //     desc: "Stay tuned for inspiring blogs filled with fresh ideas and uplifting content. Check back often for updates!",
      //   },
    ],
    []
  );
  return (
    <div className="blogsWrapper">
      {blogs.map((blog) => (
        <div className="blogCard" key={blog.id}>
          <img src={blog.imgSrc} alt="blog" className="blogPic" />
          <div className="blogContent">
            <p className="blogTitle">{blog.title}</p>
            <p className="blogDesc">
              <>{blog.desc}</>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
