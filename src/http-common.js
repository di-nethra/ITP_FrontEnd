import axios from "axios";

//You can change the baseURL that depends on REST APIs url that your Server configures.

export default axios.create({
  //baseURL: "http://localhost:8080/api",
  baseURL: "https://ispirithalei-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
