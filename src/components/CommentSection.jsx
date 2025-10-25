import { useState } from "react";

const CommentSection = ({ comments }) => {
  const [allComments, setAllComments] = useState(comments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const updated = [...allComments, { user: "Guest", text: newComment }];
    setAllComments(updated);
    setNewComment("");
  };

  return (
    <div className="comments">
      <h3>💬 Comments ({allComments.length})</h3>
      {allComments.map((c, index) => (
        <p key={index}><b>{c.user}:</b> {c.text}</p>
      ))}
      <textarea
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleAddComment}>Post Comment</button>
    </div>
  );
};

export default CommentSection;
