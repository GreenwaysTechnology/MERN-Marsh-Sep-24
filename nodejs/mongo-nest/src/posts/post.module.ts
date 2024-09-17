import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { PostsService } from "./post.service";
import { PostsController } from "./posts.controller";

@Module({
    imports: [HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
    }),],
    controllers: [PostsController],
    providers: [PostsService]
})
export class PostModule {

}