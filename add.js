
const items = document.querySelectorAll(".item");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
items.forEach((item) => {
  item.addEventListener("focus", focusFunc);
  item.addEventListener("blur", blurFunc);
});




const form = document.querySelector("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const message = document.getElementById("phone");


function sendEmail(){
 //const bodyMessage = `Username: $(username.value) <br> Email:$(email.value) <br> Phone:$(phone.value) <br> Message:$(message.value)`;

  Email.send({
    SecureToken: " 41646697-8968-4d6b-9a3a-51cd9c300488",
    To : 'anshulsharma3878@gmail.com',
    From : "anshulsharma3878@gmail.com",
    Subject : "New Contact From Enquiry",
    Body : "Username: " + document.getElementById("username").value 
    + "<br> Email: " + document.getElementById("email").value 
    + "<br> Phone:" + document.getElementById("phone").value 
    + "<br> Message: " + document.getElementById("message").value
}).then(
  message => {
    if(message == "OK"){
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
);
}

// function checkInputs(){
//   const items = document.querySelectorAll(".item");

//   for(const item of items){
//     if(item.value == ""){
//       item.classList.add("error");
//       item.parentElement.classList.add("error");
//     }

//     input.addEventListener("keyup", () => {
//       if(item.value != ""){
//         item.classList.remove("error");
//         item.parentElement.classList.remove("error");
//       }
//       else{
//         item.classList.add("error");
//         item.parentElement.classList.add("error");
//       }
//     });
//   }
// }

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  // checkInputs();

  sendEmail();
    
});