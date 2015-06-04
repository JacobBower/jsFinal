//var list = require("./list")
var fs = require("fs");
var hapi = require("hapi");
var async = require("async");

var server = new hapi.Server();

server.connection({
  port:8000
});

server.views({
  engines: {
    html: require("handlebars")
  },
  path: "./views/templates",
  layoutPath: "layouts",
  layout: "default",
  isCached: false
});

var List = require("./models/singleList");

var sql = require("./database");
sql.init(function() {
	var list = new List({
		type: "bucket",
		name: "Cliff Jump"
	});
	console.log(list.toJSON());
    server.start();
});



var routes = require("./routes")

server.route(routes);

// server.route({
//   method: "POST",
//   path: "/list",
//   handler: function(req, reply) {
//     list.add(req.payload);
//     reply.view("list.html", {
//       listItem: list.lists
//     });
//   }
// });

// server.route({
//   method: "POST",
//   path: "/list",
//   handler: function(req, reply) {
//     db.run("CREATE TABLE IF NOT EXISTS lists (type, name, items)");
//
//   }
// });
