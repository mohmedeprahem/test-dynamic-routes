// main module
const path = require('path');
const fs = require('fs');

// path of product.json file
const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'product.json'
);

// get dat from product.json file and convert it to objects
const getDataFromFile = cb => {
    fs.readFile(p, (error, fileContant) => {
        console.log(fileContant);
        if (error){
            console.log(error)
        } else {
            cb(JSON.parse(fileContant));
        }
    });
};

module.exports = class Product {
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }

    saveData(){
        getDataFromFile( products => {
            products.push(this)
            let data = JSON.stringify(products);
            fs.writeFile(p, data, error => {
                console.log(error);
            });
        });
        
    }
    
    static fetchAll(cb){
        getDataFromFile(cb)
    }
}