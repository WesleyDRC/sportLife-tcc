import { api } from "../services/api";

class AxiosRepository {

    #axiosClient;

    constructor() {
        this.#axiosClient = api;
    }

    async createUser({email, name, password}) {
        return this.#axiosClient.post("/auth/signup", {
            email,
            name,
            password
        })
    }
}

export default new AxiosRepository()
