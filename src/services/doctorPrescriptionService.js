import http from "../http-common";

const getAll = () => {
    return http.get("/prescriptions");
};

const get = id => {
    return http.get("/prescriptions/" + id);
};

const create = data => {
    return http.post("/prescriptions", data);
};

const update = (id, data) => {
    return http.put(`/prescriptions/${id}`, data);
};

const remove = id => {
    return http.delete("/prescriptions/" + id);
};

const getOnePrescription = id => {
    return http.get("/prescriptions/edit/" + id);
};

const search = (name,id) => {
    return http.get(`/prescriptions/search/${name}/${id}`);
  };

const PrescriptionDataServices = {
    getAll,
    get,
    create,
    update,
    getOnePrescription,
    remove,
    search
};

export default PrescriptionDataServices;
