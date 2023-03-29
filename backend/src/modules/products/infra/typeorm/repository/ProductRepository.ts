import { Repository, In } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";

import IListProductsDTO from "../../../dtos/IListProductDTO";
import IStoreProductDTO from "../../../dtos/IStoreProductDTO";
import IUpdateProductsQuantityDTO from "../../../dtos/IUpdateProductsQuantityDTO";

import { IProductRepository } from "../../../repositories/IProductRepository";
import { Assessments } from "../entities/Assessments";
import { Product } from "../entities/Product";
import AppError from "../../../../../shared/errors/AppError";
import { type } from "os";

interface IFindProducts {
  id: string;
}

export class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;
  private ormRepositoryAssessment: Repository<Assessments>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Product);
    this.ormRepositoryAssessment = AppDataSource.getRepository(Assessments);
  }

  async listAll({ category, order }: IListProductsDTO): Promise<Product[]> {
    const productQuery = this.ormRepository
      .createQueryBuilder("products")
      .leftJoinAndSelect("products.categories", "categories")
      .leftJoinAndSelect("products.discount", "discount")
      .leftJoinAndSelect("products.inventory", "inventory")
      .leftJoinAndSelect("products.assessments", "assessments");

    if (category) {
      productQuery.where({ categories_id: category });
    }

    if (order) {
      productQuery.orderBy(`products.${order}`, "DESC");
    }

    const products = await productQuery.getMany();

    return products;
  }

  async findById(id: string): Promise<Product | null> {
    const productQuery = this.ormRepository
      .createQueryBuilder("products")
      .leftJoinAndSelect("products.categories", "categories")
      .leftJoinAndSelect("products.discount", "discount")
      .leftJoinAndSelect("products.inventory", "inventory")
      .leftJoinAndSelect("products.sizes", "sizes")
      .where("products.id = :id", { id })
      .getOne();
    return productQuery;
  }

  async getAssessments(id: string): Promise<any> {
    const assessmentsQuery = this.ormRepositoryAssessment
      .createQueryBuilder("assessments")
      .leftJoinAndSelect("assessments.user", "user")
      .where("assessments.product_id = :id", { id })
      .getMany();

    return assessmentsQuery;
  }

  async create({
    imageMain,
    imageSecondary,
    imageTertiary,
    name,
    description,
    sexo,
    colors,
    price,
    weight,
    height,
    width,
    views,
    categories_id,
    inventory_id,
    discount_id,
    sizes_id,
  }: IStoreProductDTO): Promise<Product> {
    const product = new Product();
    product.imageMain = imageMain;
    product.imageSecondary = imageSecondary;
    product.imageTertiary = imageTertiary;
    product.name = name;
    product.description = description;
    product.sexo = sexo;
    product.colors = colors;
    product.price = price;
    product.weight = weight;
    product.height = height;
    product.width = width;
    product.views = views;
    product.categories_id = categories_id;
    product.inventory_id = inventory_id;
    product.discount_id = discount_id;
    product.sizes_id = sizes_id;

    await this.ormRepository.save(product);

    return product;
  }

  async updateViews(id: string) {
    const product = await this.ormRepository.manager.findOneBy(Product, {
      id,
    });
    product.views = product.views + 1;

    await this.ormRepository.manager.save(product);

    return product;
  }

  public async findAllById(products: IFindProducts[]): Promise<Product[]> {
    const idList = products.map((product) => product.id);

    const orderList = await this.ormRepository
      .createQueryBuilder("products")
      .leftJoinAndSelect("products.categories", "categories")
      .leftJoinAndSelect("products.discount", "discount")
      .leftJoinAndSelect("products.inventory", "inventory")
      .leftJoinAndSelect("products.sizes", "sizes")
      .where("products.id IN (:id)", { id: idList })
      .getMany();

    if (idList.length !== orderList.length) {
      throw new AppError("Missing Product", 404);
    }

    return orderList;
  }

  public async updateQuantity(
    products: IUpdateProductsQuantityDTO[]
  ): Promise<Product[]> {
    const productsData = await this.findAllById(products);

    const newProducts = productsData.map((productData) => {
      const productFind = products.find(
        (product) => product.id === productData.id
      );

      if (!productFind) {
        throw new AppError("Product not find", 404);
      }

      if (productData.inventory.quantity < productFind.quantity) {
        throw new AppError("Insufficient product quantity");
      }

      const newProduct = productData;

      newProduct.inventory.quantity -= productFind.quantity;

      return newProduct;
    });

    await this.ormRepository.save(newProducts);

    return newProducts;
  }
}
