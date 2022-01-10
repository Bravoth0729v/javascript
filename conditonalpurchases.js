var isloggedin = true;
var isEmailVerified = true;
var cardinfo = true;
// if (isloggedin) {
//     console.log("You are logged in successfully")
//     if (isEmailVerified) {
//         console.log("Your Email IS verified")
//     }
//     if (cardinfo) {
//         console.log("You can make a purchase now")
//     }
// }
// TODO:The and operator is:&& and the or operator is:||
if (isloggedin && isEmailVerified && cardinfo) {
    console.log("Alow User to make a Purchase")
}else{
    console.log("You Are Not Allowed To make a Purchase")
}