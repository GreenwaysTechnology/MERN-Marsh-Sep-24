import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  create(createProductDto: CreateProductDto) {
    console.log(createProductDto)
    //Todo: this DTO we can insert into db
    return createProductDto;
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    if (id >= 5) {
      return `${id}`;
    } else {
      throw new HttpException('The id which is requested not found', HttpStatus.NOT_FOUND)
    }
  }
  filter(value: any) {
    return value
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
