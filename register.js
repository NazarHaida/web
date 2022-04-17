
// var xhr = new XMLHttpRequest();
//
// xhr.open("GET",'', true);
//
// xhr.send();

const {form} = document.forms;

function retrieveFormValue(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    console.log('register', values);
}

form.addEventListener('submit', retrieveFormValue);


// function loadDoc() {
//   $("#password").on ("submit", function (e){
//     e.preventDefault();
//
//     var form = $(this);
//
//     var createTask = $.ajax({
//       url: from.attr("id"),
//       method: "POST",
//       data:serialize()
//     });
//
//     createTask.done(function (data){
//      console.log("error");
//      console.log(data)
//    });
//
//   })
// };

