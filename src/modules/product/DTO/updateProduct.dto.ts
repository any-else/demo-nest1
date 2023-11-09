import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './createProduct.dto';

//c1
export class UpdateProductDto {
  id?: number;
  name?: string;
  price?: number;
  image?: string;
}

//c2
export class UpdateProductDto2 extends PartialType(CreateProductDto) {}
