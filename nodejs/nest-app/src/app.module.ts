import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./users/user.module";
import { GreeterModule } from "./greeter/greeter.module";
import { CustomerModule } from './customer/customer.module';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from "./middlewares/logger.middleware";

//This configuration for creating object
@Module({
  imports: [UserModule, GreeterModule, CustomerModule, ProductsModule], //subModule
  controllers: [AppController], //Controllers creation
  providers: [AppService] //Service Creation
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log('middleware');
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }

}