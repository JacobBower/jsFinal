var hapi = require("hapi");
var server = new hapi.Server();

server.connection({
  port:8000
});

server.start();

server.views({
  engines: {
    html: require("handlebars")
  },
  path: "views",
  isCached: false
});

server.route({
  method:"GET",
  path: "/",
  handler:function(req, reply) {
    reply.view("templates/index.html");
  }
});

server.route({
  method:"GET",
  path: "models/assets/{param*}",
  handler: {
    directory: {
        path: "build"
    }
  }
});
