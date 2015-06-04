//database.js

var sqlite = require("sqlite3");

var facade = {
  connection: null,
  init: function(callback) {
    var db = new sqlite.Database("list.db");
    facade.connection = db;
    db.run("CREATE TABLE IF NOT EXISTS listInfo (type, name, items)", function() {
        callback();
    });
  }

};

module.exports = facade;
