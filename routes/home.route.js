const router = require("express").Router();

const homeController = require("../Controllers/home.Controller") 

router.get("/",homeController.gethome);
router.get("/home",homeController.gethome);

module.exports = router;