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
const thanks = document.querySelector(".thanks");
const content = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");        
const closeBtn = document.querySelectorAll(".close");  
const closeBtnThanks = document.querySelectorAll(".close-thanks")

let formOk = false;      // variable pour vérifier la validation du formulaire

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))

// close thanks event

closeBtnThanks.forEach((btn) => btn.addEventListener("click", closeThanks ))

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function closeThanks() {
  modalbg.style.display = "none";
  document.location.reload()
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

function validationInput() {
  const selected = [...city].some(city => city.checked);   
  const regexIdentity = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;    // Regex pour le nom et le prénom, acceptant un minimum de 2 caractères
  const regexMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/y;
  const regexQuantity = /^[0-9][0-9]?$|^99$/;
  const errors = (document.querySelectorAll('.formData'))

  if (!first.value || regexIdentity.test(first.value) == false) {
    errors[0].dataset.errorVisible = "true";
    return formOk === false
  } else {
    errors[0].dataset.errorVisible = "false"
  }

  if (!last.value || regexIdentity.test(last.value) == false) {
    errors[1].dataset.errorVisible = "true";
    return formOk === false
  } else {
    errors[1].dataset.errorVisible = "false"
  }

  if (!email.value || regexMail.test(email.value) == false) {
    errors[2].dataset.errorVisible = "true";
    return formOk === false
  } else {
    errors[2].dataset.errorVisible = "false"
  }

  if (!birthdate.value) {
    errors[3].dataset.errorVisible = "true";
    return formOk === false
  } else {
    errors[3].dataset.errorVisible = "false"
  }

  if (!quantity.value || regexQuantity.test(quantity.value) == false) {
    errors[4].dataset.errorVisible = "true";
    return formOk === false
  } else {
    errors[4].dataset.errorVisible = "false"
  }

  if (!selected) {
    errors[5].dataset.errorVisible = "true";
    return formOk === false
  } else {
    errors[5].dataset.errorVisible = "false"
  }

  if (condition.checked == false) {
    errors[6].dataset.errorVisible = "true";
    return formOk === false
  } else {
    errors[6].dataset.errorVisible = "false"
  }

  return formOk = true

}

validation.addEventListener("submit", (e) => {

  e.preventDefault();
  validationInput()
  if (formOk) {
    content.style.display = "none"
    thanks.style.display = "block"
    
  }
})
