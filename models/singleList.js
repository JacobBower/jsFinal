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
			//$id: data.id
		}, function() {
			callback();
		}); 
	},
	load: function(callback) {
		var self = this;
		//select from database
		//var q = "SELECT rowid AS id, name, type, items FROM lists WHERE rowid = $id;";
		var q = "SELECT * FROM lists WHERE rowid = $id;";
		//SELECT name, client, address FROM projects WHERE rowid = $id;"
		//get a single result
		sql.connection.get(q, {
			$id: this.get("id")
		}, function(err, results) {
			console.log(results);
			self.set(results);
			callback();
		});
		//self.set(result);
	}
});

//var list = new List();
//console.log(list.toJSON());

module.exports = List;
