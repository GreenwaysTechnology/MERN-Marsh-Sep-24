import { Injectable } from "@nestjs/common";

@Injectable()
export class GreeterService {

    //apis
    public sayGreet(): string {
        return "Welcome to Nest App"
    }
}