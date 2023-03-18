import { getRepository, Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import IListProductsDTO from "../../../dtos/IListProductDTO";
import IStoreProductDTO from "../../../dtos/IStoreProductDTO";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { Assessments } from "../entities/Assessments";
import { Product } from "../entities/Product";

export class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;
  private ormRepositoryAssessment: Repository<Assessments>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Product);
    this.ormRepositoryAssessment = AppDataSource.getRepository(Assessments);
  }

  async listAll({ category, orderBy }: IListProductsDTO): Promise<Product[]> {
    const productQuery = this.ormRepository
      .createQueryBuilder("products")
      .leftJoinAndSelect("products.categories", "categories")
      .leftJoinAndSelect("products.discount", "discount")
      .leftJoinAndSelect("products.inventory", "inventory")
      .leftJoinAndSelect("products.assessments", "assessments");

    if (category) {
      productQuery.where({ categories_id: category });
    }

    if(orderBy) {
      productQuery.orderBy(`products.${orderBy}`, 'DESC')
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
    imageUrl,
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
    product.imageUrl = imageUrl;
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
      id
    })
    product.views = product.views + 1

    await this.ormRepository.manager.save(product)

    return product
  }
}
