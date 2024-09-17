import { Controller, Get } from "@nestjs/common";
import { PostsService } from "./post.service";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";


@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) { }

    @Get()
    findAll() {
        return this.postsService.findAll()
    }
}