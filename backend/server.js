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
app.post('/posts', async (req, res) => {
    try {
      const post = new Post(req.body);
      await post.save();
      res.status(201).send(post);
    } catch (error) {
      res.status(400).send(error);
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