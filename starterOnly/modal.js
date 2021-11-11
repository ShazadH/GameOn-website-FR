// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close"); // Select the close class
const submitBtn = document.querySelector(".btn-submit");
const firstName = document.getElementById("firstName");
const firstNameError = document.querySelector(".firstNameError");
const lastName = document.getElementById("lastName");
const lastNameError = document.querySelector(".lastNameError");
const email = document.getElementById("email");
const emailError = document.querySelector(".emailError");

//glogal var
let formError = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// All Check on submit button click

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formError = false;
    //Check all input
    checkFirstNameValidity();
    checkLasrNameValidity();
    checkEmailValidity();

    if (formError === false) {
        // close modal + succes message
    }
});

////////////////////////
////// Functions ///////
////////////////////////

function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// check first name
function checkFirstNameValidity() {
    const regex = new RegExp("^[a-zA-Z]{2,15}$");
    const value = firstName.value;

    if (regex.test(value) === false) {
        formError = true;
        firstNameError.style.display = "inline";
        firstName.parentElement.dataset.errorVisible = "true";
        console.log("first name", value);
    } else {
        firstNameError.style.display = "none";
        firstName.parentElement.dataset.errorVisible = "false";
    }
}

//check last name
function checkLasrNameValidity() {
    const regex = new RegExp("[a-zA-Z]{2,15}");
    const value = lastName.value;

    if (regex.test(value) === false) {
        formError = true;
        lastNameError.style.display = "inline";
        lastName.parentElement.dataset.errorVisible = "true";
        console.log("last name", value);
    } else {
        lastNameError.style.display = "none";
        lastName.parentElement.dataset.errorVisible = "false";
    }
}

//Check email

function checkEmailValidity() {
    const regex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    const value = email.value;

    if (regex.test(value) === false) {
        console.log("false", value);
        formError = true;
        emailError.style.display = "inline";
        email.parentElement.dataset.errorVisible = "true";
    } else {
        console.log("true", value);
        emailError.style.display = "none";
        email.parentElement.dataset.errorVisible = "false";
    }
}
