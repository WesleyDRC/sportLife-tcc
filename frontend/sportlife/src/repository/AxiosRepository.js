import { api } from "../services/api";

class AxiosRepository {

    #axiosClient;

    constructor() {
        this.#axiosClient = api;
    }

    async createUser({email, password,confirmPassword}) {
        return await this.#axiosClient.post("/auth/signUp", {
            email,
            password,
            confirmPassword
        })
    }

    async updateUser(id, name) {
        return this.#axiosClient.patch(`/users/${id}`, {
            name,
        })
    }
}

export default new AxiosRepository()
