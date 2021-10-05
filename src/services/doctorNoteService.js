import http from "../http-common";

const getAll = () => {
  return http.get("/notes");
};

const create = data => {
  return http.post("/notes", data);
};

const search = (query) => {
  return http.get(`/notes/search/${query}`);
};

const NotesDataService = {
  getAll,
  create,
  search
};

export default NotesDataService;
