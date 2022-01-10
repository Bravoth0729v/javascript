isloggedinfromgoogle = true;
isloggedinfromfacebook = true;
isloggedinfromemail = true;
if(isloggedinfromgoogle || isloggedinfromfacebook || isloggedinfromemail){
    console.log("logged in successfully")
}else{
    console.log("The user is not allowed to log in." )
}