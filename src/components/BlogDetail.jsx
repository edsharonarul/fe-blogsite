import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import CommentSection from "./CommentSection";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p><i>By {blog.author} on {blog.date}</i></p>
      <p>{blog.content}</p>
      <CommentSection comments={blog.comments} />
    </div>
  );
};

export default BlogDetail;
