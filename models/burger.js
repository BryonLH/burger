var orm = require("../config/orm.js");

var burgers = {
    viewAllBurgers: function(burgers) {
        orm.viewAllBurgers("burgers", function(res) {
            burgers(res);
        });
    },
    insertBurger: function(cols, vals, burgers) {
        orm.insertBurger("burgers", cols, vals, function(res) {
            burgers(res);
        });
    },
    updateBurger: function(objColVals, devoured, burgers) {
        orm.update("burgers", objColVals, devoured, function(res) {
            burgers(res);
        });
    }
};

module.exports = burgers;