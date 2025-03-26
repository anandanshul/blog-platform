const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));
const Post = require('./models/Post');

// Create post
app.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: -1 }).lean();
      if (!posts || posts.length === 0) {
        return res.status(200).json([]); // Return empty array if no posts
      }
      res.json(posts);
    } catch (err) {
      console.error('Database error:', err);
      res.status(500).json({ 
        error: 'Server error',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
      });
    }
  });

// Get all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.send(posts);
  } catch (error) {
    res.status(500).send();
  }
});

// Get single post
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send();
    res.send(post);
  } catch (error) {
    res.status(500).send();
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));