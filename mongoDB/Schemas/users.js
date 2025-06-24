import { Schema, model } from "mongoose";



const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cedula: {
        type: Number,
        required: true,
    },
    tlf: {
        type: Number,
        required: true,
    },
    ref: {
        type: Array,
        required: true,
    },
    numbers:{
        type: Array,
        required: true
    }
    
})


const User = model('User', UserSchema);

export {
    User
}