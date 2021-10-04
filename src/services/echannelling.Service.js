import http from "../http-common";

const create = (data) => {
  return http.post("/channell/add", data);
};

const getByStatus = status => {
  return http.get("/channell/bystatus/"+ status);
};

const getAll = () => {
  return http.get("/channell/all/");
};

const getCount = () => {
  return http.get("/channell/count/");
};

const updateStatus = (id,status) => {
  return http.put(`/channell/status/${id}/${status}`);
};

const search = (query,status) => {
  return http.get(`/channell/search/${query}/${status}`);
};

const channellServices = {
  create,
  search,
  getByStatus,
  updateStatus,
  getAll,
  getCount
};
export default channellServices;
