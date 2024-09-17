import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Head, Header, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) { }

  @Post()
  @HttpCode(201)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @HttpCode(200)
  @Header("greet", "welcome")
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/filter')
  filter(@Query() params): string {
    return this.productsService.filter(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //+ operator here is to convert string to number
    return this.productsService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
