//listOfLists.js

var Backbone = require("backbone");
var sql = require("../database");
var SingleList = require("./singleList");

var ListOfLists = Backbone.Collection.extend({
	model: SingleList,
	load: function(callback) {
		var self = this;
		var q = "SELECT rowid AS id, name, type, items FROM lists;"
		sql.connection.all(q, function(err, results) {
			self.reset(results);
			callback();
		});

	}

});

module.exports = ListOfLists;
