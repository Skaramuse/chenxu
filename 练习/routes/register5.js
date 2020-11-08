var express = require("express");
//建立一个空表
var router = express.Router();
const user = require("../sql/user");

router.get("/", function (req, res, next) {
  // console.log("进入了reg5");
  res.render("register");
});




router.post("/in", function (req, res, next) {
  console.log("进入reg5的 in ");

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
      res.redirect('/register5')
    }
  });
});
 




module.exports = router;