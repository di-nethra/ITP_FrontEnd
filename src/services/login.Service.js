import http from "../http-common";

const login = data => {
    return http.post("/auth/signin", data);
};

export default login;