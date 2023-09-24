function validate(){
    var name,password;
    name=document.getElementById("user").value;
    password=document.getElementById("password").value;

    if(name!="khushi9035" || password!="khushi@9035"){
       alert("Username or password is incorrect");
        return false;
    }
    else{
        alert("You have successfully logged in..");
    }

}