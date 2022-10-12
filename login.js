var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});




document.querySelector("#form1").addEventListener("submit", getdata)

let sign_up_data = JSON.parse(localStorage.getItem("userData")) || [];

function getdata(){
    event.preventDefault()

    let obj ={};

    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    console.log(name)

    obj.name = name;
    obj.email = email;
    obj.password = password;

    sign_up_data.push(obj);

    console.log(sign_up_data)
    alert("sign up success")
    container.classList.remove("sign-up-mode");
    localStorage.setItem("userData",JSON.stringify(sign_up_data))
    // window.location.
}



let userData = JSON.parse(localStorage.getItem("userData"));
document.querySelector("#form2").addEventListener("submit",compare);

function compare(e){
    e.preventDefault();

    let email =document.querySelector("#login_name").value
    let password = document.querySelector("#login_password").value

    console.log(email,password)

    let isPresent = userData.filter(function(e){
        return email==e.email && password == e.password;
    })
    console.log(isPresent)
    // isPresent = false;
    // for(var i=0; i<sign_up_data.length;i++){
    //     if(email == userData && password ==userData ){
    //         isPresent =true;
    //         break;
    //     }
    
        if(isPresent.length){
            alert("successfully logged in")
        }else{
            alert("wrong credentials")
        }

    
}



