import http from "../http-common";

const create = (data) => {
  return http.post("/channell/add", data);
};
const getByStatus = status => {
  return http.get("/channell/bystatus/"+ status);
};

const updateStatus = (id,status) => {
  return http.put(`/channell/status/${id}/${status}`);
};

const channellServices = {
  create,
  getByStatus,
  updateStatus
};
export default channellServices;
