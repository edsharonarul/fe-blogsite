import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

const Bloglist = () => {
  return (
    <div className="home-container">
      <h1>📝 Blog Posts</h1>
      <div className="blog-list">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default Bloglist;