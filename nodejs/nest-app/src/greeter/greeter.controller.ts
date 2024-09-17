import { Controller, Get } from "@nestjs/common";
import { GreeterService } from "./greeter.service";

@Controller("/greeter")
export class GreeterController {
    constructor(private greeterService: GreeterService) { }

    @Get()
    public sayGreet(): string {
        return this.greeterService.sayGreet()
    }
}