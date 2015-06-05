module.exports = [
  {
    method:"GET",
    path: "/",
    handler: require("./handlers/home")
  },
  {
  	method:"POST",
  	path: "/list.html",
  	handler: require("./handlers/list")
  }
];
