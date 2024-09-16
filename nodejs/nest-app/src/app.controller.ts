import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";


@Controller()
export class AppController {
  //private appService: AppService
  constructor(private appService: AppService) {
    //this.appService = appService
  }

  //rest apis
  @Get()
  public hello(): string {
    return this.appService.hello()
  }
}