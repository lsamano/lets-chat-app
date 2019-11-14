import mongoose from 'mongoose';

const Schema = mongoose.Schema

const UsersSchema = new Schema({
    username: String,
    password: String
}, { timestamps: true } )

export default mongoose.model('User', UsersSchema)