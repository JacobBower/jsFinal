//home.js

var ListOfLists = require("../models/listOfLists");

module.exports = function(req, reply) {

    var list = new ListOfLists();
    list.load(function() {
      var data = list.toJSON();
      // console.log(data);
      reply.view("index.html");
	});
};
