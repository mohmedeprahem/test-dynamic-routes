const Product = require('../models/products');

exports.getHomePage = (req, res) => {
    res.render('home')
}

exports.getMembers = (req, res) => {
    Product.fetchAll(member => {
        res.render('members',{
            members: member
        })
    });
}