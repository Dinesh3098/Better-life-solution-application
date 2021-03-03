const express = require("express");

const {funcapi} = require("../components/apidata");

const router = express.Router();

router.get("/", funcapi);

module.exports = router;