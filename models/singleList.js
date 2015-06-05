var Backbone = require("backbone");
var sql = require("../database.js");

var List = Backbone.Model.extend({
	defaults: {
		type: "todo",
		name: "",
		items: ""
	},
	create: function(callback) {
		callback = callback || function() {};
		var data = this.toJSON();
		var q = "INSERT INTO lists (type, name, items) VALUES ($type, $name, $items);";
		sql.connection.run(q, {
			$type: data.type,
			$name: data.name,
			$items: data.items
		}, callback)
	}
});

var list = new List();
//console.log(list.toJSON());

module.exports = List;