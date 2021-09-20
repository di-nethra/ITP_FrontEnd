import http from "../http-common";

const getAll = () => {
    return http.get("/inquiry");
};



const create = data => {
    return http.post("/inquiry/add", data);
};

const update = (id, data) => {
    return http.put(`/inquiry/${id}`, data);
};

const remove = id => {
    return http.delete("/inquiry/" + id);
};
const getOneInquiry = (id) => {
    return http.get("/inquiry/" + id);
  };

// const removeAll = () => {
//     return http.delete(`/sessions`);
// };


const inquriyServices = {
    getAll,
    create,
    update,
    remove,
    getOneInquiry,
    // removeAll,
};
export default inquriyServices;