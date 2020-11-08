var express = require("express");
//建立一个路由空表
var router = express.Router();
const user = require("../sql/user");

router.get("/", function (req, res, next) {
  console.log("进入了reg4");

  res.render("register");
});




router.post("/in", function (req, res, next) {
  console.log("进入reg4 in ");

  let obj = req.body;
  console.log(obj)
  console.log(obj.username);
  console.log(obj.password)

  user.insertMany(obj, (err, data) => {
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