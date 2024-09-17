import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./users/user.module";
import { GreeterModule } from "./greeter/greeter.module";
import { CustomerModule } from './customer/customer.module';
import { ProductsModule } from './products/products.module';

//This configuration for creating object
@Module({
  imports: [UserModule,GreeterModule, CustomerModule, ProductsModule], //subModule
  controllers: [AppController], //Controllers creation
  providers: [AppService] //Service Creation
})
export class AppModule {

}