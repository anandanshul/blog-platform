import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const quillRef = useRef(null);
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline',
    'list', 'bullet'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editor = quillRef.current.getEditor();
    const content = editor.getContents();
    
    try {
      await axios.post('http://localhost:5000/posts', {
        title,
        content
      });
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="form-group">
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        required
      />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={modules}
        formats={formats}
      />
      <button type="submit" className="btn">Publish</button>
    </form>
    </div>
  );
};

export default CreatePost;