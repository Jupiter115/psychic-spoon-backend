// Dependencies
const express = require('express');
const app = express();
require('./db/connection')
const cors = require('cors');
app.set('port', process.env.PORT || 3000)




// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/products');
});

// Controllers
// Forward all requests to localhost:3111/icecreams to the ice cream controller
const productController = require('./controllers/productController')
app.use('/products', productController);

const userController = require('./controllers/userController')
app.use('/users', userController)

app.listen(app.get('port'), () => {
    console.log('on port:' + app.get('port'))
})
