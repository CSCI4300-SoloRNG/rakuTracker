const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({origin: true, credentials: true }));
const drawings = require('./routes/api/drawing');
app.use('/s', drawings);

const conn_str = 'mongodb+srv://adw13800:1aGyF6zRuTW21LND@cluster0.77unkre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
  app.listen(port, () => console.log('Server running on port ${port}'));
  console.log("MongoDB Connection Suceeded...");  
})
.catch(err=> {
  console.log('Error in DB Connection ${err}');
});
