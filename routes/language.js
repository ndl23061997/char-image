var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/:language", function(req, res, next) {
  let { language } = req.params;
  req.session.language = language;
  let history = req.headers.referer.replace(req.headers.host, "");
  res.redirect("/");
});

module.exports = router;
