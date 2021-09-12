import http from "../http-common";

// const getAll = () => {
//   return http.get("/notes");
// };

const create = data => {
  return http.post("/notes", data);
};

export default {
  // getAll,
  create
};
