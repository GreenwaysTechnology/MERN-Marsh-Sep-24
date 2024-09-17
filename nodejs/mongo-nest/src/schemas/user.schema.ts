import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
    //fields
    @Prop()
    name: string
    @Prop()
    email: string
}
export const UserSchema = SchemaFactory.createForClass(User)