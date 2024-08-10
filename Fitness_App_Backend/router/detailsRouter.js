const detailsController = require("../controller/detailsController");
const router = require("express").Router();

router.post('/updateDetails',detailsController.updateDetails);

module.exports = router;