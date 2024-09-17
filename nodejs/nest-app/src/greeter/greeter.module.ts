import { Module } from "@nestjs/common";
import { GreeterService } from "./greeter.service";
import { GreeterController } from "./greeter.controller";



@Module({
    imports: [],
    controllers: [GreeterController],
    providers: [GreeterService]
})
export class GreeterModule {

}