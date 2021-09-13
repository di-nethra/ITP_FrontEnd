import http from "../http-common";

const getAll = () => {
    return http.get("/inventories");
  };

const create = data => {
    return http.post("/inventories", data);
  };

  export default {
    getAll,
    create
  };
