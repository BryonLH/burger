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

router.post("/api/addburger", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

// router.put("/burgers/update", function(req, res) {
//     burger.update(req.body.id, function(result) {
//         console.log(result);
//         res.redirect("/");
//     });
// });

// router.put("/api/burgers/:id", function(req, res) {
//     burger.update(req.params.id, function() {
//         res.redirect("/");
//     });
// });



// router.put("/api/update", function(req, res) {
//     burger.update(req.body.id, function() {
//         res.redirect("/");
//     });
// });

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;