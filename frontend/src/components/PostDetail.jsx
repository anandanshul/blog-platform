import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const quillRef = useRef(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    if (post && quillRef.current) {
      const editor = new Quill(quillRef.current, {
        readOnly: true,
        modules: { toolbar: false },
        theme: 'snow'
      });
      editor.setContents(post.content);
    }
  }, [post]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-container card mt-4">
      <h1>{post.title}</h1>
      <div ref={quillRef} />
    </div>
  );
};

export default PostDetail;