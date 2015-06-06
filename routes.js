module.exports = [
  {
    method:["GET", "POST"],
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
    path: "/assests/{param*}",
    handler: {
      directory: {
        path: "public"
      }
    }


  }];
