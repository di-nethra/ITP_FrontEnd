import http from "../http-common";

const create = (data) => {
  return http.post("/channell/add", data);
};
const channellServices = {
  create,
};
export default channellServices;
