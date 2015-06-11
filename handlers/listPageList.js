//listPageList.js

var ListOfLists = require("../models/listOfLists");

module.exports = function(req, reply) {

    var list = new ListOfLists();
    list.load(function() {
      var data = list.toJSON();
       //console.log(data);
      reply.view("allLists", {
        lists: data,
        name: data.name,
        type: data.type,
        items: data.items,
      });
  });
};