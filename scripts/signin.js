let UserArr = JSON.parse(localStorage.getItem("UserData")) || [];

class Usersigninfo{
    constructor(fn, ln, e, Un, p){
      this.First_name = fn;
      this.Last_name = ln;
      this.Email = e;
      this.Username = Un;
      this.Password = p;
    }

}

let SignupUnsplash = () => {

    let f_name = document.getElementById("first_name").value;
    let l_name = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;


    let User = new Usersigninfo(f_name, l_name, email, username, password);

    if(checkemail(email) == false){
        alert('User already exists!');
        window.location.href = 'login.html';

    }else if(f_name == ""|| l_name == "" || email == "" || password == "" || username == ""){

       alert("Please fill all the credentials!");
    }else{
        UserArr.push(User);
        localStorage.setItem('UserData', JSON.stringify(UserArr));
        alert("Account Created Successfully!");
        window.location.reload();
        window.location.href = 'login.html';
    }

}



let checkemail = (email) => {

    let filterd = UserArr.filter((elem) => {

        return email === elem.email;
    });
    if(filterd.length > 0){
        return false;
    }else{
        return true;
    }
}