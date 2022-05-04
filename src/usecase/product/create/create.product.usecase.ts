import Product from "../../../domain/product/entity/product";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { InputCreateProductDto, OutputCreateProductDto } from "./create.product.dto";

export default class CreateProductUseCase {
  constructor(
    private productRepository: ProductRepositoryInterface
  ) {}

  async execute(input: InputCreateProductDto): Promise<OutputCreateProductDto> {
    const product = new Product(input.id, input.name, input.price);
    await this.productRepository.create(product);
    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}