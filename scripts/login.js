let UserArr = JSON.parse(localStorage.getItem("UserData")) || [];


class logininfo{
    constructor(le, lp){

        this.Email = le;
        this.Password = lp;
    }
}
let loginUnsplash = () => {

    let email = document.getElementById("l_email").value;
    let password = document.getElementById("l_password").value;

    let L_user = new logininfo(email, password);

    var flag = false;
    for(var i=0; i<UserArr.length; i++){

        if(UserArr[i].email == L_user.email && UserArr[i].password == L_user.password)
        {
            flag = true;
            alert("Authentication successful!");
            window.location.href = "index.html";
        }
    }
    if(flag == false){
        alert("Authentication failed!");
    }

}