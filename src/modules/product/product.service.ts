import { UpdateProductDto } from './DTO/updateProduct.dto';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './DTO/createProduct.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.emtity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}
  async getAllProductService(): Promise<any> {
    return this.productRepository.find();
  }

  async getByProductIdService(id: number): Promise<any> {
    // return this.productRepository.findOneBy({ id: id });
    return this.productRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async createProductService(product: CreateProductDto): Promise<any> {
    try {
      this.productRepository.save(product);
    } catch (error) {}
  }

  async updateProductService(
    id: number,
    product: UpdateProductDto,
  ): Promise<any> {
    try {
      this.productRepository.update(id, product);
    } catch (error) {}
  }

  async removeProductService(id: number): Promise<any> {
    try {
      this.productRepository.delete(id);
    } catch (error) {}
  }
}
