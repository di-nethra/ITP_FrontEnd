import http from "../http-common";

const create = data => {
    return http.post("/inventories", data);
  };

  export default {
    create
  };
  