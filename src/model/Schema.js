import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username:String,
    email:String,
    password:String,
    login:Boolean,
    createdAt:{default: Date.now}
})

const Users = models.user || model('user', userSchema);

export default Users;

