import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
    constructor(private customerService: CustomerService) {

    }
    @Get()
    findAll() {
        return this.customerService.findAll()
    }
    @Post()
    public save(): string {
        return this.customerService.save()
    }
    @Put()
    public update(): string {
        return this.customerService.update()
    }

    @Delete()
    public remove(): string {
        return this.customerService.remove()
    }
}
