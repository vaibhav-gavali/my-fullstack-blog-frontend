import React, { useState } from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [commentText, setCommentText] = useState('');
  const { user } = useUser();

  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(
      `/api/articles/${articleName}/comments`,
      {
        postedBy: user.email,
        text: commentText,
      },
      { headers }
    );
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);

    setCommentText('');
  };

  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      {user && <p>Your are posting as {user.email}</p>}

      <textarea
        rows={4}
        cols={50}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />

      <button disabled={!commentText} onClick={addComment}>
        Add Comment
      </button>
    </div>
  );
};

export default AddCommentForm;
