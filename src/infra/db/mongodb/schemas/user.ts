import mongoose, { Schema } from 'mongoose'

const User = new Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    created_at: Date,
    activated_at: Boolean,
    role: String
})

export default mongoose.model('User', User)