import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateProductDto } from './DTO/createProduct.dto';
import { UpdateProductDto } from './DTO/updateProduct.dto';
import { ProductService } from './product.service';

@Controller('/api/v1/product')
export class ProductController {
  //cánh tốt hơn
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProduct() {
    return this.productService.getAllProductService();
  }

  @Get('/:id')
  getByProductId(@Param('id') id: string) {
    return this.productService.getByProductIdService(Number(id));
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.productService.createProductService(body);
  }

  @Patch('/:id')
  updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productService.updateProductService(Number(id), body);
  }

  @Delete('/:id')
  removeProduct(@Param('id') id: string) {
    return this.productService.removeProductService(Number(id));
  }
}
