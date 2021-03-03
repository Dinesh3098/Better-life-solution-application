const express = require("express");

const {getdata} = require("../components/getdataforbackend");

const router = express.Router();

router.get("/", getdata);

module.exports = router;