const mongoose = require('../db/connection');
const seedData = require('./seeds.json');
const Products = require('./models/Products');

Products.deleteMany({})
	.then(() => {
		Products.insertMany(seedData).then((products) => {
			console.log('Products loaded');
			console.log(products);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
