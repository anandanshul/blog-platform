# Blogging Platform with QuillJS Editor

A full-stack blogging platform featuring a rich text editor (QuillJS), Node.js backend, and MongoDB database.


## Features

- 🖋️ WYSIWYG editor with formatting tools (bold, italic, headings, lists)
- 📝 Create, publish, and view blog posts
- 🗃️ MongoDB database storage
- 🔄 RESTful API backend
- 🎨 Responsive design

## Tech Stack

**Frontend:**
- React.js
- QuillJS (rich text editor)
- Axios (HTTP client)
- React Router (navigation)

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- CORS middleware

## Installation

### Prerequisites
- Node.js (v16+)
- MongoDB (running locally or connection string)
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blogging-platform.git
   cd blogging-platform
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   Create `.env` in backend folder:
   ```env
   MONGODB_URI=mongodb://localhost:27017/blog
   PORT=5000
   ```

## Running the Application

1. **Start MongoDB**
   ```bash
   mongod
   ```

2. **Run Backend Server**
   ```bash
   cd backend
   npm start
   ```

3. **Run Frontend Development Server**
   ```bash
   cd ../frontend
   npm start
   ```

The app will be available at `http://localhost:3000`

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/posts` | GET | Get all posts |
| `/posts` | POST | Create new post |
| `/posts/:id` | GET | Get single post |

## Project Structure


blogging-platform/
├── backend/
│   ├── server.js         # Express server
│   ├── models/           # MongoDB models
│   └── package.json
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.js        # Main app component
│   │   └── index.js      # React entry point
│   └── package.json
└── README.md


## Troubleshooting

**Common Issues:**
- **500 Errors**: Check backend console for MongoDB connection issues
- **CORS Errors**: Ensure backend has proper CORS configuration
- **Editor Not Loading**: Verify QuillJS CSS is imported

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)


### Key Sections Explained:

1. **Features**: Highlights the main capabilities
2. **Tech Stack**: Clearly lists all technologies used
3. **Installation**: Step-by-step setup guide
4. **Running the App**: Clear instructions to start all services
5. **API Endpoints**: Quick reference for backend routes
6. **Project Structure**: Visual representation of the codebase
7. **Troubleshooting**: Common issues and solutions

### To Add Later:
1. Replace `yourusername` with your actual GitHub username
2. Add a screenshot (save as `/screenshot.png` in root)
3. Customize the license if needed
4. Add deployment instructions if you host it online

Would you like me to add any additional sections like:
- Deployment instructions (for Vercel/Heroku)
- Environment variable details
- Testing instructions
- Roadmap/planned features?