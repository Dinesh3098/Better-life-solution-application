const mongoose = require("mongoose");

const User = require("../models/user");

exports.funcapi = async (req, res) => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/better-place-app-dinesh", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .catch((err) => {
      console.log(err);
    });
  const countryCode = req.query["nat"] ? req.query["nat"] : "US";
  const page = req.query["page"] ? req.query["page"] : 1;
  const results = req.query["results"] ? req.query["results"] : 10;
  const gen = req.query["gender"];
  //   console.log(req.query["page"]);
  try {
    let count;
    if (gen) {
      var details = await User.find({ gender: gen, nat: countryCode })
        .limit(results * 1)
        .skip((page - 1) * results);
      count = await User.countDocuments({ gender: gen, nat: countryCode });
    } else {
      var details = await User.find({ nat: countryCode })
        .limit(results * 1)
        .skip((page - 1) * results);
      count = await User.countDocuments({ nat: countryCode });
    }
    res.json({
      details,
      totalPages: Math.ceil(count / results),
      currentPage: page * 1,
    });
  } catch (err) {
    console.log(err.message);
  }
};