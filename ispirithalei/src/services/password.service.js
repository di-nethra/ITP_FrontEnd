import http from "../http-common";

const getAll = () => {
  return http.get("/password");
};

// const get = (id) => {
//   return http.get("/password" + id);
// };

const create = (data) => {
  return http.post("/password", data);
};

// const update = (id, data) => {
//   return http.put(`/password/${id}`, data);
// };

// const remove = (id) => {
//   return http.delete(`/password${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/password`);
// };

export default {
  getAll,
  // get,
  create,
  // update,
  // remove,
  // removeAll,
};