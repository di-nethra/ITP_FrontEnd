import http from "../http-common";

const getAll = () => {
    return http.get("/mdrequest");
};



const create = data => {
    return http.post("/mdrequest/add", data);
};

const remove = id => {
    return http.delete("/mdrequest/" + id);
};

const inquriyServices = {
    getAll,
    create,
    remove,
};
export default purchaseRequestServices;