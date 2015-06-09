var ListOfLists = require("../models/listOfLists");

module.exports = function(req, reply) {
    //var id = req.param.id;
    var list = new ListOfLists( {
      //id: id
    });
    //list.set("id", id);
    list.load(function() {
      var data = list.toJSON();
      reply.view("list", {
        lists: data,
        name: data.name,
        type: data.type,
        items: data.items,
        //id: data
      });
	});
};
