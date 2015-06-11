// var ListOfLists = require("../models/listOfLists");

// module.exports = function(req, reply) {
//     var list = new ListOfLists( {
//     list.load(function() {
//       var data = list.toJSON();
//       reply.view("list", {
//         lists: data,
//         name: data.name,
//         type: data.type,
//         items: data.items,
//       });
// 	});
// };
var ListOfLists = require("../models/listOfLists");

module.exports = function(req, reply) {

    var list = new ListOfLists();
    list.load(function() {
      var data = list.toJSON();
       console.log(data);
      reply.view("allLists", {
        lists: data,
        name: data.name,
        type: data.type,
        items: data.items,
      });
  });
};