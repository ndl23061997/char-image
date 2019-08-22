var express = require("express");
var router = express.Router();
const path = require("path");

/* GET users listing. */
router.get("/", function(req, res, next) {
  let language = req.session.language || "en";
  let texts = require(path.join(process.env.ROOT_PATH, "lang", language));

  let data = { ...texts.video };
  return res.render("video", data);
});

module.exports = router;
