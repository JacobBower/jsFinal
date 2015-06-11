var Backbone = require("backbone");
var sql = require("../database.js");

var List = Backbone.Model.extend({
	defaults: {
		type: "",
		name: "",
		items: "",
		id: ""
	},
	create: function(callback) {
		callback = callback || function() {};
		var data = this.toJSON();
		var q = "INSERT INTO lists (type, name, items) VALUES ($type, $name, $items);";
		sql.connection.run(q, {
			$type: data.type,
			$name: data.name,
			$items: data.items,
		}, function() {
			callback();
		}); 
	},
	load: function(callback) {
		var self = this;
		var q = "SELECT * FROM lists WHERE rowid = $id;";
		//get a single result
		//self.set(result);
		sql.connection.get(q, {
			$id: this.get("id")
		}, function(err, results) {
			//console.log(results);
			self.set(results);
			callback();
		});
	}
});

module.exports = List;
