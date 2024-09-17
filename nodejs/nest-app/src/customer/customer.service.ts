import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {

    constructor() { }

    findAll() {
        return "Customers"
    }

    public save(): string {
        return "save"
    }
    public update(): string {
        return "update"
    }
    public remove(): string {
        return "remove"
    }

}
