import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import '../styles/Home.css'; // Optional styling

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts');
        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="home-container">
      <h1 className="text-center mt-3 mb-4">Blog Posts</h1>
      {posts.length === 0 ? (
        <div className="no-posts">
          <p>No posts yet. Be the first to create one!</p>
          <Link to="/create" className="create-link btn btn-outline">
            Create Post
          </Link>
        </div>
      ) : (
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post._id} className="post-card card">
              <h2>
                <Link to={`/posts/${post._id}`} className="post-title">
                  {post.title}
                </Link>
              </h2>
              <p className="post-date">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <Link to={`/posts/${post._id}`} className="read-more">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;