var connection = require("./connection.js");

var orm = {
    // Function to select all data in the burgers table
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
    // Function to insert a new burger


    // Function to update the selected burger
};

module.exports = orm;
