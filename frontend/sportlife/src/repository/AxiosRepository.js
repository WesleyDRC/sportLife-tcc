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
    state,
    road,
    neighborhood,
    number,
    complement,
  ) {
    return this.#axiosClient.post(`/users/address`, {
      city,
      postal_code,
      state,
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
    state,
    road,
    neighborhood,
    number,
    complement,
  ) {
    return this.#axiosClient.patch(`/users/address`, {
      city,
      postal_code,
      state,
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
        order: order ? order : "",
      },
      params: {
        name: filter ? filter : '',
      },
    });
  }

  async findBySport({ categoryId }) {
    return this.#axiosClient.get("/products", {
      headers: {
        category: categoryId ? categoryId : ""
      }
    });
  }

  async findByBrand({ brand }) {
    return this.#axiosClient.get("/products", {
      params: {
        brand: brand ? brand : ""
      }
    });
  }

  async findBySex({ sexo }) {
    return this.#axiosClient.get("/products", {
      params: {
        sexo: sexo ? sexo : ""
      }
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

  async addComment({stars, assessment, productId}) {
    const data = {
      stars, assessment, productId
    };
    const response = await this.#axiosClient.post(`/users/assessment`, data);
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

  async getOrderUser() {
    return this.#axiosClient.get(`/order`);
  }

  async calculateShippingPrice(sCepDestino) {
    return this.#axiosClient.post('/shipping',{
      sCepDestino
    });
  }
}

export default new AxiosRepository();
