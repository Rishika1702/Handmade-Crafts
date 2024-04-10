const {model, Schema} = require('../connection');

const mySchema = new Schema({
    productName : {type : String, require: true},
    price:{type: Number},
    image:{type: Image },
});

module.exports = model('product', mySchema);