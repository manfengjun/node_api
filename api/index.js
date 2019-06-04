var express = require("express");
var router = express.Router();

router.use("/account", require("./account/account"));

module.exports = router;
