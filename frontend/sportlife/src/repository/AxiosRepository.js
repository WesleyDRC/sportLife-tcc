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

    async updateUser(firstName, lastName, CPF, gender, dateBirth, telephone) {
        return this.#axiosClient.patch(`/users/`, {
            firstName,
            lastName,
            CPF,
            gender,
            dateBirth,
            telephone
        })
    }
}

export default new AxiosRepository()
