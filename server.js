const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const poems = require('./routes/api/poems');
const path = require('path');


//Initialize Express
const app = express();

// BodyParser MiddelWare
app.use(bodyParser.json());

//Import MongoURI from Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo 
mongoose
  .connect(db)
  .then( ()=> console.log('MongoDB connected to MLAB...'))
  .catch( err=> console.log(err));

//  Routes
app.use('/api/poems', poems);

// Serve static assets if in Production

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));  
  });
}
  
  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server Started on Port: ${port}`));

