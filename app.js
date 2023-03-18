const express = require("express");
// const bodyParser = require("body-parser");
const session = require("express-session");

const indexRouter = require("./routes/login");
const usersRouter = require("./routes/home");

const path = require("path");

// const hbs=require("handlebars")
const hbs = require("express-handlebars");

const app = express();
const port = 8080;

app.use(
  session({
    secret: "mysecretkeywdeeewweee",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 120000 },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.set("Cache-control", "no-store,no-cache");
  next();
});

// app.set('view engine' , 'ejs');
// app.engine('hbs',hbs ({extname:'hbs',defaultLayout:'views'}))
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "views")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
