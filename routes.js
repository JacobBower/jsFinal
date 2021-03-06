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
    path: "/list/{id}",
    handler: require("./handlers/goToList")
  },
  {
    method: "GET",
    path: "/allLists",
    handler: require("./handlers/listPageList")
  },
  {
    method: "GET",
    path: "/assets/{param*}",
    handler: {
      directory: {
        path: "src"
      }
    }
  },
  {
    method: "GET",
    path: "/list/assets/{param*}",
    handler: {
      directory: {
        path: "src"
      }
    }
  }
];

//list/{id}