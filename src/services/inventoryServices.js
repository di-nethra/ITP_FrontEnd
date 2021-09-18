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

const update = (id, data) => {
  return http.put(`/inventories/${id}`, data);
};

const getOneInventory = (id) => {
  return http.get("/inventories/" + id);
};


  const inventoryServices = {
    getAll,
    create,
    remove,
    update,
    getOneInventory
  }
  
  export default inventoryServices
