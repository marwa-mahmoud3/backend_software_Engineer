const router = require('express').Router();
const authGuard = require('./guards/auth.guard');

const productsController = require('../Controllers/products.Controller');

router.get("/products",authGuard.isAuth,productsController.getproducts);

module.exports = router;