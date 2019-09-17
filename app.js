const mongoose = require('mongoose');
const express = require("express");
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
const users = require("./routes/api/users")

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected successfully"))
    .catch(error => console.log(error));

app.get("/", (req, res) => res.send("<div><style style='display: block' contentEditable> html {background: cornflowerblue; font-size:100px; text-align: center;}</style></div>"))

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));