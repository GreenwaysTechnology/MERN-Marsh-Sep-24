import { Controller, ForbiddenException, Get, Param, UseFilters } from "@nestjs/common";
import { GreeterService } from "./greeter.service";
import { HttpExceptionFilter } from "./exception.fitler";

@Controller("/greeter")
export class GreeterController {
    constructor(private greeterService: GreeterService) { }

    @Get()
    public sayGreet(): string {
        return this.greeterService.sayGreet()
    }
    @Get(":message")
    @UseFilters(new HttpExceptionFilter())
     public sayHello(@Param('message') message: string): string {
        if (message === 'hello') {
            return `Hello`
        }else {
            throw new ForbiddenException();
        }
    }
}