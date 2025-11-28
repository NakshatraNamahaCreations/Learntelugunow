import React from "react";
import "../styles/Blog.css";
import blog1 from "../assets/home_banner/feature1.jpg";
import blog2 from "../assets/home_banner/pexels-keira-burton-6146978.jpg";
import blog3 from "../assets/courses/phonotics.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      date: "25 May, 2024",
      author: "Admin",
      comments: "8 Comments",
      title: "Master Telugu Reading and Writing Skills with Expert Guidance",
    },
    {
      id: 2,
      image: blog2,
      date: "20 May, 2024",
      author: "Admin",
      comments: "15 Comments",
      title: "Learn Telugu Online: Flexible Learning for Modern Learners",
    },
    {
      id: 3,
      image: blog3,
      date: "15 May, 2024",
      author: "Admin",
      comments: "10 Comments",
      title: "Phonics Training: Building Strong Foundations in Telugu",
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-title">
          <h2 className="title">Latest Blog Post</h2>
          <div className="title-divider"></div>
          <p>
            Even slightly believable. If you are going use a passage of Lorem
            Ipsum need some
          </p>
        </div>

        <div className="blog-wrapper">
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 blog-col">
                <div className="single-blog">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="date">{post.date}</span>
                      <span className="sep">-</span>
                      <span className="author">By: {post.author}</span>
                      <span className="sep">-</span>
                      <span className="comments">{post.comments}</span>
                    </div>
                    <h3 className="blog-title">
                      <a href="#">{post.title}</a>
                    </h3>
                    <a href="#" className="read-more">
                      Read more <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

