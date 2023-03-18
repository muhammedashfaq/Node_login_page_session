var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  if (req.session.login) {
    res.redirect("/users");
  } else {
    res.render("login", { title: "Login Page" });
  }
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const mypasword = "000111";
  const myemail = "aspak@gmail.com";
  if (myemail == email) {
    if (password == mypasword) {
      req.session.login = true;
      res.redirect("/users");
    } else {
      res.render("login", { error: "invalid username or password" });
    }
  } else {
    res.render("login", { error: "invalid username or password" });
  }
});
module.exports = router;
