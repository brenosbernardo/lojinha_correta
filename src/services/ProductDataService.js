import http from "../http-common";

class ProductDataSevice{
    update(data, id){
        return http.update(`/Produto/updateProduto/${id}`, data);
    }

    delete(id){
        return http.delete(`/Produto/deleteProduto/${id}`);
    }

    getAll() {
        return http.get("/Produto/exibirProdutos");
    }
}

export default new ProductDataSevice();
