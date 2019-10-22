var orm = require("../config/orm.js");

var burgers = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function (burgerId, cb) {
        var condition = "id = " + burgerId;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burgers;