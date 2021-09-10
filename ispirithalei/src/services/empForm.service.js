import http from "../http-common";

const getAll = () => {
  return http.get("/empform");
};

// const get = (id) => {
//   return http.get("/empform" + id);
// };

const create = (data) => {
  return http.post("/empform", data);
};

// const update = (id, data) => {
//   return http.put(`/empform/${id}`, data);
// };

// const remove = (id) => {
//   return http.delete(`/empform${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/empform`);
// };

export default {
  getAll,
  // get,
  create,
  // update,
  // remove,
  // removeAll,
};