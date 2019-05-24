const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Requiring the `User` model for accessing the `users` collection
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/profiles", { useNewUrlParser: true });

// let dummy = {
//   name: "John Doe",
//   picture: "https://images.pexels.com/photos/1194036/pexels-photo-1194036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   description: "Please insert a description of yourself here."
// }

// Define API routes here
app.get("/api/users", function(req,res) {
  db.User.find()
    .then(function(dbUser) {
      res.json(dbUser)
    })
    .catch(function(err) {
      res.json(err);
    })
})

app.put("/api/users/:id", function(req,res) {
  db.User.findOneAndUpdate(
    { _id: req.body.id },
    { $set: req.body.data }
  )
    .then(function(dbUser) {
      res.json(dbUser)
    })
    .catch(function(err) {
      res.json(err);
    })
})

app.post("/api/users", function(req,res) {
  console.log(req.body.newProf);
  db.User.create(req.body.newProf)
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
