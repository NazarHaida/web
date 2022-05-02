const nickname = document.querySelector("#nickname")
const firstname = document.querySelector("#firstname")
const lastname = document.querySelector("#lastname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const rep_password = document.querySelector("#rep_password")
let btn = document.querySelector("#btn");

btn.onclick = (event) => {
  let reg_form = document.querySelector("#form")
  if(reg_form.checkValidity()){

  event.preventDefault()
  const fnameVal = firstname.value;
  const lnameVal = lastname.value;
  const nicknameVal = nickname.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  const rep_passwordVal = rep_password.value;
  const message = document.getElementById("error_message")
  const data = {
    lastname: lnameVal,
    firstname: fnameVal,
    nickname: nicknameVal,
    email: emailVal,
    password:passwordVal,
    rep_password:rep_passwordVal

  }
  if (rep_passwordVal !== passwordVal){
    message.innerHTML="Not Matching"
    message.style.display="block";
    return
  }
  else{
    message.style.display="none";
  }
  fetch('http://127.0.0.1:5000/user/post', {
    // mode: "no-cors",
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  }).then(response => {


    if (response.status === 201) {

      window.location.href = "login.html"
      return (response.json());
    }
    throw response.status;
  }).catch((error) => {
        console.log(error);
        if (error === 403) {
          message.innerHTML="Email already Used"
          message.style.display="block";
          return
            // alert('Email already Used');
        }
    });

}
}
