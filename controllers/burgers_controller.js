var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// router.post("/api/addburger", function(req, res) {
//     burger.create(req.body.burger_name, function(result) {
//         console.log(result);
//         res.redirect("/");
//     });
// });

router.post("/api/addburger", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});



// router.put("/burgers/update", function(req, res) {
//     burger.update(req.body.id, function(result) {
//         console.log(result);
//         res.redirect("/");
//     });
// });

module.exports = router;