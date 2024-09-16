import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./users/user.module";

//This configuration for creating object
@Module({
  imports: [UserModule], //subModule
  controllers: [AppController], //Controllers creation
  providers: [AppService] //Service Creation
})
export class AppModule {

}