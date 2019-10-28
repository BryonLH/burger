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
    // update: function (id, cb) {
    //     orm.updateOne("burgers", {devoured: true}, `id = ${id}`, function(res) {
    //         cb(res);
    //     });
    // }
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;