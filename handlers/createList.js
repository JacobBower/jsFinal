//createList.js

var SingleList = require("../models/singleList");

module.exports = function(req, reply) {
  //console.log(req.payload);
  var list = new SingleList(req.payload);
  list.create(function () {
    reply.redirect("/");
  });
}