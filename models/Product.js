const {
    Schema,
    model
} = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    priceSale: {
        type: Number,
    },
    img: {
        type: String,
        required: true
    },
    categoryId: {
        ref: 'categories',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('product', productSchema)