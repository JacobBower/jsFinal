//list.js
//var ListOfLists = require("../models/listOfLists");

module.exports = function(req, reply) {
	//list.add(req.payload);
    reply.view("list.html");
    var mkList = {
      lists: [ ],
      add: function(listItem) {
      mkList.lists.push(listItem);
    }
};
