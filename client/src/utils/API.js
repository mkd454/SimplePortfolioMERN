import axios from "axios";

export default {
  // Gets all user profiles
  getProfiles: function() {
    return axios.get("/api/users");
  },
  // Update a user's profile
  updateUser: function(id, data) {
    console.log("userid: "+id);
    console.log(data);
    return axios.put("/api/users/" + id, {id, data});
  },
  createProfile: function(newProf) {
    console.log("Creating a new profile");
    console.log(newProf);
    return axios.post("/api/users", {newProf});
  }
}