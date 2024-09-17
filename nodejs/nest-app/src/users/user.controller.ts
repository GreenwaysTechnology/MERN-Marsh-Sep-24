import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.type";
import { Observable } from "rxjs";

@Controller("/users")
export class UserController {
    constructor(private userService: UserService) { }

    //sync
    @Get()
    public findAll(): Array<User> {
        return this.userService.findAll();
    }

    //async with promise - fire and forget
    @Get("promise")
    public getUsers(): Promise<User[]> {
        return this.userService.findAllAsync();
    }
    //async with rxjs Observable - streaming, sending data over period of time.
    @Get("rxjs")
    public getRxUsers(): Observable<User[]> {
        return this.userService.getUsers();
    }

}