import http from "../http-common";

const getAll = () => {
    return http.get("/inquiry");
};



const create = data => {
    return http.post("/inquiry/add", data);
};

// const update = (id, data) => {
//     return http.put(`/sessions/${id}`, data);
// };

const remove = id => {
    return http.delete("/inquiry/" + id);
};

// const removeAll = () => {
//     return http.delete(`/sessions`);
// };


const inquriyServices = {
    getAll,
    create,
    // update,
    remove,
    // removeAll,
};
export default inquriyServices;