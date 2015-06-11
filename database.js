//database.js

var sqlite = require("sqlite3");

var facade = {
  connection: null,
  init: function(callback) {
    var db = new sqlite.Database("lists.db");
    facade.connection = db;
    db.run("CREATE TABLE IF NOT EXISTS lists (type, name, items)", function() {
        callback();
    });
  }
};

module.exports = facade;
