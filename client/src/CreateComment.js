import { useState } from "react";
import axios from "axios";

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>New Comment</label>
        <input
          type="text"
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreateComment;
