import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './entity/product.emtity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // thêm nhưng thư viện hoặc module bên ngoài vào
  controllers: [ProductController], //nó là nơi để điều hướng đường dẫn
  providers: [ProductService], // nhà cung cấp nơi xử lý các nghiệp vụ business
  exports: [], // xuất module này ra thì bên module khác mới sử dụng được
})
export class ProductModule {}
