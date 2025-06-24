import { Schema, model } from "mongoose";
import crypto from 'crypto';



const numberSchema = new Schema({
    id: {
    type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    }
})
    

const Number = model('Number', numberSchema);

export {
    Number,
}