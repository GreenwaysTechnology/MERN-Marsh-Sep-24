import { Injectable } from "@nestjs/common";
import { User } from "./user.type";
import { Observable, of } from "rxjs";

const USERS = [
    { id: 1, name: 'Subramanian Murugan', email: 'subu@gmail.com', status: true },
    { id: 2, name: 'admin1', email: 'admin1@gmail.com', status: false },
    { id: 3, name: 'admin2', email: 'admin2@gmail.com', status: true },
    { id: 4, name: 'admin3', email: 'admin3@gmail.com', status: false },
    { id: 5, name: 'admin4', email: 'admin4@gmail.com', status: true },
];
@Injectable()
export class UserService {

    //sync
    public findAll(): Array<User> {
        return USERS
    }
    public findAllAsync(): Promise<Array<User>> {
        return Promise.resolve(USERS)
    }
    public getUsers(): Observable<Array<User>> {
        return of(USERS)
    }
}