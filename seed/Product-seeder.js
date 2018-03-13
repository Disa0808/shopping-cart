var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping');

var products = [
    new Product({
        imagePath: 'http://placehold.it/500x300',
        title: 'How to create my first app?',
        description: 'Awesome Applcication!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://placehold.it/500x300',
        title: 'How to create my first app?',
        description: 'Awesome Applcication!!!',
        price: 10
    }),      
    new Product({
        imagePath: 'http://placehold.it/500x300',
        title: 'How to create my first app?',
        description: 'Awesome Applcication!!!',
        price: 10
    }),    
    new Product({
        imagePath: 'http://placehold.it/500x300',
        title: 'How to create my first app?',
        description: 'Awesome Applcication!!!',
        price: 10
    })      
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}