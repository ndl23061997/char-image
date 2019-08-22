var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function(req, res, next) {
  let language = req.session.language || "en";
  req.session.name = "long";
  let texts = require(path.join(process.env.ROOT_PATH, "lang", language));
  let languages = require(path.join(process.env.ROOT_PATH, "lang", "languages"));
  let data = { ...texts.index, languages, currentLanguage: language };
  res.render("index", data);
});

router.use("/user", require("./users"));
router.use("/image", require("./image"));
router.use("/video", require("./video"));
router.use("/language", require("./language"));

module.exports = router;
