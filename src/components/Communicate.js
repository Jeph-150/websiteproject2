import React, { useState } from 'react';
import './styles/Communicate.css'; 
import { Link } from 'react-router-dom'; 

const Forum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Best TV Shows for Learning Spanish',
      comments: [
        'I’ve been watching "La Casa de Papel" and it has really helped me improve my Spanish listening skills!'
      ],
      views: 120,
    },
    {
      id: 2,
      title: 'What’s your favorite new word in French?',
      comments: [
        'I recently learned the word "époustouflant" which means "breathtaking". What about you?'
      ],
      views: 80,
    },
    {
      id: 3,
      title: 'Tips for Practicing Mandarin Pronunciation',
      comments: [
        'Recording myself speaking and comparing it to native speakers has been really helpful for me.'
      ],
      views: 200,
    },
    {
      id: 4,
      title: 'Learning Japanese through Anime',
      comments: [
        'Watching anime with Japanese subtitles has been a fun way to pick up new vocabulary.'
      ],
      views: 150,
    },
  ]);

  const [currentPostId, setCurrentPostId] = useState(1); // ID of the post being commented on
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setPosts(posts.map(post => {
      if (post.id === currentPostId) {
        return {
          ...post,
          comments: [...post.comments, newComment],
        };
      }
      return post;
    }));
    setNewComment('');
  };

  return (
    <div className="forum-container">
      <h2 className="forum-title">Let's talk</h2>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3 className="post-title">{post.title}</h3>
            <div className="post-comments-container">
              {post.comments.map((comment, index) => (
                <p key={index} className="post-comment">{comment}</p>
              ))}
            </div>
            <div className="post-meta">
              <span className="post-comments-count">{post.comments.length} comments</span>
              <span className="post-views">{post.views} views</span>
            </div>
          </div>
        ))}
      </div>
      <div className="comment-form-container">
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            className="comment-input"
            placeholder="Add a comment..."
          />
          <button type="submit" className="comment-submit-button">Post Comment</button>
          <Link to="/goBack" className="home-button">Go back</Link>
        </form>
      </div>
      
    </div>
  );
};

export default Forum;
