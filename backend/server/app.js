const express = require('express');
const app = express();
const port = process.env.PORT || 42069
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

app.use(cors({origin: true, credentials: true }));
const drawings = require('./routes/api/drawing');
app.use('/api/drawing', drawings);
const logins = require('./routes/api/login');
app.use('/api/login', logins);
const users = require('./routes/api/user');
app.use('/api/user', users);
const auth= require('./routes/api/cookieJwtAuth');
app.use('/api/cookieJwtAuth', auth);


const conn_str = process.env.CONN_STR;
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
  console.log("MongoDB Connection Suceeded...");  
})
.catch(err=> {
  console.log(process.env.CONN_STR)
  console.log('Error in DB Connection '+ err);
});
