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
	// var lists = new List({
	// 	type: "grocery",
	// 	name: "Jambalaya",
 //    items: "Crawdads, Andouille, Chicken, Peppers, Celery, Onion, Rice, Stock"
	// });
	//console.log(lists.toJSON());
	// lists.create(function(err) {
	// });
    server.start();
});



var routes = require("./routes");

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

