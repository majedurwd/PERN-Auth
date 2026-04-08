import {model, Schema} from 'mongoose'

const userSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

export const User = model('User', userSchema)
