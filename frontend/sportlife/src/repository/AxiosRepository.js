import { api } from "../services/api";

class AxiosRepository {
  #axiosClient;

  constructor() {
    this.#axiosClient = api;
  }

  async createUser({ email, password, confirmPassword }) {
    return await this.#axiosClient.post("/auth/signUp", {
      email,
      password,
      confirmPassword,
    });
  }

  async updateUser(firstName, lastName, CPF, gender, dateBirth, telephone) {
    return this.#axiosClient.patch(`/users/`, {
      firstName,
      lastName,
      CPF,
      gender,
      dateBirth,
      telephone,
    });
  }

  async createAddress(
    city,
    postal_code,
    country,
    road,
    neighborhood,
    number,
    complement
  ) {
    return this.#axiosClient.post(`/users/address`, {
      city,
      postal_code,
      country,
      road,
      neighborhood,
      number,
      complement,
    });
  }

  async getAddress() {
    return this.#axiosClient.get(`/users/address`);
  }

  async updateAddress(
    city,
    postal_code,
    country,
    road,
    neighborhood,
    number,
    complement
  ) {
    return this.#axiosClient.patch(`/users/address`, {
      city,
      postal_code,
      country,
      road,
      neighborhood,
      number,
      complement,
    });
  }

  async findAll({ category, order, filter }) {
    if (!category) {
      category = "";
    }
    if (!order) {
      order = "";
    }
    if (!filter) {
      filter = "";
    }
    return this.#axiosClient.get("/products", {
      headers: {
        category: category,
        order: order ? order : "",
      },
      params: {
        name: filter,
      },
    });
  }

  async updateViewProduct(id) {
    return this.#axiosClient.patch(`products/${id}/views`);
  }

  async findOneProduct(id) {
    return this.#axiosClient.get(`products/${id}`);
  }

  async findAssessmentProduct(id) {
    return this.#axiosClient.get(`products/${id}/assessments`);
  }

  async addItemCart(productId, quantity, size) {
    const data = {
      products: [
        {
          productId: productId,
          quantity: quantity,
          size: size,
        },
      ],
    };
    const response = await this.#axiosClient.post(`/cart`, data);
    return response;
  }

  async getCartUser() {
    return this.#axiosClient.get(`/cart`);
  }

  async deleteProductCart(id) {
    return this.#axiosClient.delete(`/cart/${id}`);
  }

  async updateProductById(productId, quantity, size) {
    const data = { productId, quantity, size };
    const response = await this.#axiosClient.patch(`/cart`, data);
    return response;
  }
}

export default new AxiosRepository();
