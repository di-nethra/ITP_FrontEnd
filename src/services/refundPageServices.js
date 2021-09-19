import http from "../http-common";

const getAll = () => {
  return http.get("/payments/info");
};

const get = (id) => {
  return http.get(`/payments/${id}`);
};

const create = (data) => {
  return http.post("/refund", data);
};

const update = (id, data) => {
  return http.put(`/payments/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/payments/${id}`);
};

// const removeAll = () => {
//   return http.delete(`/payments/info`);
// };

const RefundServices = {
  getAll,
  get,
  create,
  update,
  remove,
  // removeAll,
};

export default RefundServices;
