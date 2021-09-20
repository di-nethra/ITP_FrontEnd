import http from "../http-common";

const getAllDoctors = () => {
  return http.get("/empform/doctors");
};


const getAll = () => {
  return http.get("/empform");
};

const getOneEmployee = (id) => {
  return http.get("/empform/" + id);
};

const create = (data) => {
  return http.post("/empform", data);
};

const update = (id, data) => {
  return http.put(`/empform/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/empform/${id}`);
};

const removeAll = () => {
  return http.delete(`/empform`);
};

const empformServices = {
  getAllDoctors,
  getAll,
  getOneEmployee,
  create,
  update,
  remove,
  removeAll,
}
export default empformServices;
