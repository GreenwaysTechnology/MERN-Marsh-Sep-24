    import { Injectable } from "@nestjs/common";
    import { InjectModel } from "@nestjs/mongoose";
    import { Model } from "mongoose";
    import { User } from "src/schemas/user.schema";
    import { CreateUserDto } from "./dto/create-user-dto";

    @Injectable()
    export class UserService {
        constructor(@InjectModel(User.name) private userModel: Model<User>) { }

        async findAll(): Promise<User[]> {
            return this.userModel.find().exec()
        }
        async findOne(id: string): Promise<User> {
            return this.userModel.findOne({ _id: id }).exec()
        }

        async create(createUserDto: CreateUserDto): Promise<User> {
            const createdUser = await this.userModel.create(createUserDto)
            return createUserDto
        }
        async delete(id: string) {
            const deletedUser = await this.userModel.findByIdAndDelete({ _id: id }).exec()
            return deletedUser
        }
    }