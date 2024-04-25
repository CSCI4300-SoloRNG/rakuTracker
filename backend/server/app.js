const express = require('express');
const app = express();
const port = process.env.PORT || 42069
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

app.use(cors({origin: true, credentials: true }));
const drawings = require('./routes/api/drawing');
app.use('/s', drawings);

const conn_str = process.env.CONN_STR;
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
  console.log("MongoDB Connection Suceeded...");  
})
.catch(err=> {
  console.log('Error in DB Connection ${err}');
});
