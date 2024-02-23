import { Schema, model } from 'mongoose'

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'The name is obligatori'],
        unique: true
    },
    surname: {
        type: String,
        required: [true, 'The surname is obligatori']
    },
    email: {
        type: String,
        required: [true, 'The email is obligatori']
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'The username is obligatori']
    },
    password: {
        type: String,
        minLength: [8, 'Password must be 8 charcaters'],
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'CLIENT_ROLE'
    }
})

export default model('user', userSchema)