function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form elements

const first = document.querySelector('#first'); 
const last = document.querySelector('#last');  
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const city = document.querySelectorAll('input[name="location"]')
const condition = document.querySelector('input[name="checkbox1"]')

const validation = document.querySelector('#validation')

// form validation

valideForm.addEventListener("submit", (e)=> {
  const selected = [...city].some(city => city.checked);   
  const regexIdentity = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  const regexMail =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/y;
  const regexQuantity =/^[0-9][0-9]?$|^99$/;

  if(!first.value || //first == "" || 
     !last.value || //last =="" || 
     !email.value || //email == "" ||
     !birthdate.value ||// birthdate =="" ||
     !quantity.value || //quantity == "" || 
     !selected ||
     condition.checked == false) {

      alert("Tous les champs doivent être remplis")

        e.preventDefault();

     }else if(regexIdentity.test(first.value) == false || regexIdentity.test(last.value) == false) {
      alert('Saisie invalide. le texte doit contenir 2 caractères minimum')
        e.preventDefault();

     }else if(regexMail.test(email.value) == false) {
       alert("adresse mail invalide")
        e.preventDefault();

     }else if(regexQuantity.test(quantity.value) == false) {
       alert(" vous devez indiquer un nombre")
        e.preventDefault()

     }else{
       alert("formulaire envoyé avec succès !")
     }
})

const form = document.getElementByClassName('formData')

console.log(form.dataset.error)

