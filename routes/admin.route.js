const router = require("express").Router();
const check = require('express-validator').check;

const adminGuard = require('./guards/admin.guard');
const adminController = require("../Controllers/admin.Controller") 

router.get("/admin",adminGuard,adminController.getadmin);

module.exports = router;