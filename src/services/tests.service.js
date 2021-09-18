import http from "../http-common";

const getAll = () => {
    return http.get("/tests");
};

const create = data => {
    return http.post("/tests", data);
};

const update = (id, data) => {
     return http.put(`/tests/${id}`, data);
};

const remove = id => {
    return http.delete("/tests/" + id);
};

const getOneTest = id => {
    return http.get("/tests/" + id);
};

const getAllSubbmited = () => {
    return http.get("/tests/subbmitted");
};
const getAllStarted = () => {
    return http.get("/tests/started");
};

const getAllCompleted = () => {
    return http.get("/tests/completed");
};

const findByCNandID = (contactnumber, specimenid) =>{
    return http.get(`/tests/client?contactnumber=${contactnumber}&specimenid=${specimenid}`);
}


const TestDataService = {
    getAll,
    getOneTest,
    getAllSubbmited,
    getAllStarted,
    getAllCompleted,
    findByCNandID,
    create,
    update,
    remove,
};
export default TestDataService;