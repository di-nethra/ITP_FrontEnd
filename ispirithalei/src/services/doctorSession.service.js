import http from "../http-common";

// const getAll = () => {
//     return http.get("/sessions");
// };

const get = id => {
    return http.get("/sessions/"+ id);
};

const create = data => {
    return http.post("/sessions", data);
};

const update = (id, data) => {
    return http.put(`/sessions/${id}`, data);
};

const remove = id => {
    return http.delete(`/sessions/${id}`);
};

const removeAll = () => {
    return http.delete(`/sessions`);
};


export default {
    // getAll,
    get,
    create,
    update,
    remove,
    removeAll,

};