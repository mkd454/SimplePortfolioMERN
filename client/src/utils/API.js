import axios from "axios";

export default {
  // Gets all user profiles
  getProfiles: function() {
    return axios.get("/api/users");
  }
}