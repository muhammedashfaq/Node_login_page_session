var express = require("express");
var router = express.Router();

var products = [
  {
    name: "HP",
    description:
      "HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/ MSO 2021/1.41 Kg, 14s-dy2507TU",
    price: "37,990",
    image: "https://m.media-amazon.com/images/I/81zoyHn5uJL._SX679_.jpg",
  },
  {
    name: "DELL",
    description:
      "Dell Vostro 3420 Laptop,12th Gen Intel Core i3-1215U, 8GB & 512GB SSD, 14.0 (35.56Cms) FHD WVA AG 250 nits, Windows 11 + MSO'21, Carbon Black (D552325WIN9BE, 1.48 KGs)",
    price: "43,490",
    image:
      "https://m.media-amazon.com/images/I/41fecgQP5UL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "ASUS",
    description:
      "ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W",
    price: "37,990",
    image:
      "https://m.media-amazon.com/images/I/414057taYKL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "LENOVO",
    description:
      "Lenovo IdeaPad Slim 3 Intel Celeron N4020 4th Gen 15.6 (39.62cm) HD Thin & Light Laptop (8GB/256GB SSD/Windows 11/Office 2021/2Yr Warranty/3months Game Pass/Platinum Grey/1.7Kg), 81WQ00MQIN",
    price: "26,990",
    image:
      "https://m.media-amazon.com/images/I/41PnIUzyYML._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "SAMSUNG",
    description:
      "Samsung Galaxy Book3 360 Intel 13th Gen i5 EvoTM 33.78cm(13.3) Super Amoled 2-in-1 Touchscreen Laptop (16 GB/512GB SSD/Windows11/MSOffice/BacklitKB/Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA1IN",
    price: "109,990",
    image:
      "https://m.media-amazon.com/images/I/41y30sf2UPL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "MI",
    description:
      "Mi Notebook Pro QHD+ IPS Anti-Glare Display Intel Core i5-11300H 11th Gen 14 inch (35.56 cm) Thin & Light Laptop (8GB/512GB SSD/Iris Xe Graphics/Windows 11/MS Office 21/Backlight KB/FP Sensor/1.4 Kg)",
    price: "54,490",
    image: "https://m.media-amazon.com/images/I/71iiXU7HHkL._SX679_.jpg",
  },
  {
    name: "HP",
    description:
      "HP ProBook 440 G8 Notebook PC, 11th Gen Intel Core i5-1135G7 14 inch(35.6cm) HD Laptop(8GB RAM/512GB SSD/Intel Irix Xe Graphics/Win 11/Pike Silver Aluminium/1.38 Kg) - 6G9R3PA",
    price: "51,990",
    image: "https://m.media-amazon.com/images/I/61lQFJgdrrL._SX679_.jpg",
  },
  {
    name: "AVITA",
    description:
      "AVITA SATUS S111 NU14A1INC43PN-SG 14.1 FHD (35.81cms) Laptop (Intel Celeron N4020/4GB/128GB SSD/FHD Display/Windows 11 Home/ Intel UHD Graphics), Space Grey",
    price: "16,990",
    image: "https://m.media-amazon.com/images/I/71qneC09MRL._SX679_.jpg",
  },
];


router.get("/", function (req, res, next) {
  let randomNum = Math.floor(Math.random() * 100);
  if (req.session.login) {
    res.render("home", { title: "home", num: randomNum, products });
  } else {
    res.redirect("/");
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
