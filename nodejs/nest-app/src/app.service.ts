import { Injectable } from "@nestjs/common";


@Injectable()
export class AppService {
  //api
  public hello(): string {
    return "Hello!!!"
  }
}