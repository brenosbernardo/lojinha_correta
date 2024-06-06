import http from "../http-common";

class UserDataSevice{
    create(data){
        return http.post("/Cliente/addCliente", data);
    }
    logar(data){
        return http.post("/Cliente/login", data);
    }
}

