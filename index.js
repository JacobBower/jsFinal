//var list = require("./list")
//var fs = require("fs");
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

var sql = require("./database");
sql.init(function() {
	//initializes database before starting the server
    server.start();
});

var routes = require("./routes");

server.route(routes);


