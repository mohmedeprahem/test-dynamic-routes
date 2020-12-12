const Product = require('../models/products');

exports.addData = (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let job = req.body.job;
    let product = new Product(name, age, job);
    product.saveData();
    res.redirect('/');
}