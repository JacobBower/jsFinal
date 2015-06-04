var Backbone = require("backbone");

var List = Backbone.Model.extend({
	defaults: {
		type: "todo",
		name: "",
		items: ""
	}
});

var list = new List();
console.log(list.toJSON());

module.exports = List;