import api from "./api";

export default class Service{
    static getFront() {
        return api.get();
    }
    static create(body) {
        return api.post( '/create', body);
    }
    static addGif(id, body) {
        return api.post( `/${id}/gif`, body);
    }
    static update(id, body) {
        return api.put( `/${id}`, body);
    }
    static delete(id) {
        return api.delete( `/${id}`);
    }
}