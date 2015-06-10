module.exports = [
  {
    method:"GET", 
    path: "/",
    handler: require("./handlers/home")
  },
  {
    method:"POST",
    path: "/list/create",
    handler: require("./handlers/createList")
  },
  {
    method: "GET",
    //path: "/list.html",
    path: "/list/{id}",
    handler: require("./handlers/goToList")
  },
  {
    method: "GET",
    path: "/assests/{param*}",
    handler: {
      directory: {
        path: "src"
      }
    }
  }
];
