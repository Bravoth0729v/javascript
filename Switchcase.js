var user = "souvik";
switch (user) {
    case "admin":
        console.log("you get the full access.");
        break;
    case "subadmin":
        console.log("you get the access to create or delete access.");
        break;
    case "testprep":
        console.log("you get the access to create or delete the tests.");
        break;
    case "user":
        console.log("you get to consume the courses.");
        break;

   default:
        console.log("Login to access the content.");
        break; 
}