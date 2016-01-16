var Products = require('db/products.js');

Products.all();

Products.add({});

Products.getByName('NAME');

Products.editByName('NAME', {name: 'whatevs'});


