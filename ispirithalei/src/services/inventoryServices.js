import http from "../http-common";

const getAll = () => {
    return http.get("/inventories");
  };

const create = data => {
    return http.post("/inventories", data);
  };

const remove = id => {
    return http.delete("/inventories/" + id);
};


  const inventoryServices = {
    getAll,
    create,
    remove
  }
  
  export default inventoryServices
