const CommentList = ({ comments }) => {
  const renderComments = Object.values(comments).map((comment) => {
    let content = comment.content;

    if (comment.status === "pending") {
      content = "The comment is pending and waiting for moderation";
    } else if (comment.status === "rejected") {
      content = "The comment is rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <div>{renderComments}</div>;
};

export default CommentList;
