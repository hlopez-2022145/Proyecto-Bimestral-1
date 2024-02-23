import { Schema, model } from 'mongoose'

export const productSchema = Schema({
    name: {
        type: String,
        required: [true, 'The product name is obligatori']
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type:String
    },
    stock: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    },
    // user: {
    //     type: Schema.ObjectId,
    //     ref: 'user',
    //     required: true
    // },
    category: {
        type: Schema.ObjectId,
        ref: 'category',
        required: true
    }
})

export default model('product', productSchema)