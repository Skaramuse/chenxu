var express = require("express");
var router = express.Router();
const user = require("../sql/user");


router.get("/", function (req, res, next) {
  console.log("进入了login4");

  res.render("login");
});

  router.post("/in", function (req, res, next) {
    console.log("进入login4 in ");
  
    let obj = req.body;
    console.log(obj)
    console.log(obj.username);
    console.log(obj.password)
  
    user.findOne(obj, (err, data) => {
      if (err) {
        console.log(err);
        res.redirect('/register')
      }
      if (data) {
        res.redirect('/pro')
      } else {
        res.redirect('/register4')
      }
    });
  });

module.exports = router;