import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import PostDetail from "./components/PostDetail";
import "./App.css";

function App() {
  return (
    <Router className="container">
      <div className="nav-container">
        <div className="brand">My Blog</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create">New Post</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
