import http from "../http-common";

const getAll = () => {
    return http.get("/mdrequest");
};

const update = (id, data) => {
    return http.put(`/mdrequest/${id}`, data);
  };

const create = data => {
    return http.post("/mdrequest/", data);
};

const remove = id => {
    return http.delete("/mdrequest/" + id);
};

const purchaseRequestServices = {
    getAll,
    update,
    create,
    remove,
};
export default purchaseRequestServices;