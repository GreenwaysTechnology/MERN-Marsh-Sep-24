import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "src/schemas/user.schema";
import { CreateUserDto } from "./dto/create-user-dto";


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    public findAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<User> {
        return this.userService.findOne(id)
    }

    @Post()
    @HttpCode(201)
    public create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto)
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        return this.userService.delete(id)
    }
} 