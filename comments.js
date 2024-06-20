// Create web server
// Import express
const express = require('express');
const app = express();
// Import body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Import mongoose
const mongoose = require('mongoose');
// Connect to the database
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });
// Import models
const Comment = require('./models/comment');
// Import routes
const commentRoutes = require('./routes/comments');
app.use('/comments', commentRoutes);
// Start the server
app.listen(3000, () => {
  console.log('Server started');
});