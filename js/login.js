import {setCookie} from "./cookie.js";
let btn_2=document.querySelector("#btn_2")
let login_email=document.querySelector("#login_email")
let login_password=document.querySelector("#login_password")
let message_2 = document.getElementById("error_message_2")
btn_2.onclick = (event) => {
  let log_form = document.querySelector("#form")

  event.preventDefault()

  const emailVal = login_email.value;
  const passwordVal = login_password.value;
  const info = {
    email: emailVal,
    password:passwordVal,

  }

  fetch('http://127.0.0.1:5000/user/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(info)
  }).then(response => {


    if (response.status === 200) {
      message_2.style.display="none";
      response.json().then((data) => {

      setCookie("access", data,60)

    })}
    throw response.status;
  }).catch((error) => {
        console.log(error);
        if (error === 403) {
          message_2.innerHTML="Wrong Email or Password"
          message_2.style.display="block";
          return "1"
        }
    });

}
