const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const PORT = process.env.PORT || 3001;
const app = express();


// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use(express.static('public'));
app.use('/', htmlRoutes);

// GET Route for homepage
   app.get('/', (req, res) =>
   res.sendFile(path.join(__dirname, '/public/index.html'))
 );

// GET Route for feedback page
   app.get('/feedback', (req, res) =>
   res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
 );

app.listen(PORT, () =>
  console.log(`App listening at PORT: ${PORT} `)
);
