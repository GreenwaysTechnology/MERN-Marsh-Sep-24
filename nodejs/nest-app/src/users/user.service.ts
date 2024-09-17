import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {

    public findAll(): string {
        return "findAll"
    }
}