var SingleList = require("../models/singleList");
var ListofLists = require("../models/singleList");

module.exports = function(req, reply) {
    var id = req.params.id;
    var list = new SingleList({
      id: id
    });
    list.load(function() {
      var data = list.toJSON();
      console.log(data);
      reply.view("list", {
        lists: data,
        name: data.name,
        type: data.type,
        items: data.items,
        //id: data.id
      });
	});
};
