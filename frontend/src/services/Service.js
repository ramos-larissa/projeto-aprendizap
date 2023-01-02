import api from "./api";

export default class Service{
    static getFront() {
        console.log(api.get(), "api.get()");
        return api.get();
    }
}