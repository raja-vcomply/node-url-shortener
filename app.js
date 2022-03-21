const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' });
const path = require('path');


connectDB();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/urls'));

// Server Setup
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
