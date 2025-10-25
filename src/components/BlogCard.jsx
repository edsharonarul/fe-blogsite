import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p><b>Author:</b> {blog.author}</p>
      <p><b>Date:</b> {blog.date}</p>
      <Link to={`/blog/${blog.id}`} className="read-more">Read More →</Link>
    </div>
  );
};

export default BlogCard;
