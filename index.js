var list = require("./list")
var fs = require("fs");
var hapi = require("hapi");
var sqlite = require("sqlite3");
var async = require("async");
var server = new hapi.Server();

server.connection({
  port:8000
});

server.start();

server.views({
  engines: {
    html: require("handlebars")
  },
  path: "templates",
  layoutPath: "layouts",
  layout: "default",
  isCached: false
});

server.route({
  method:"GET",
  path: "/",
  handler:function(req, reply) {
    reply.view("index.html");
  }
});

server.route({
  method: "POST",
  path: "/list",
  handler: function(req, reply) {
    list.add(req.payload);
    reply.view("list.html", {
      listItem: list.lists
    });
  }
});
