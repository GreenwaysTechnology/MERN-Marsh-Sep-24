import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { map, Observable } from "rxjs";
import { Post } from "./posts.type";


@Injectable()
export class PostsService {
    constructor(private httpService: HttpService) { }

    findAll() {
        return this.httpService.get('https://jsonplaceholder.typicode.com/posts').pipe(map(response => response.data));
   }
}