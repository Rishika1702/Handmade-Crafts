const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: { type: String, require: true },
    category: String,
    material: String,
    price: { type: Number },
    image: { type: String },
    description: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('product', mySchema);