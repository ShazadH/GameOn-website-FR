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
const birthdate = document.getElementById("birthdate");
const birthdateError = document.querySelector(".birthdateError");
const numberTournament = document.getElementById("quantity");
const numberTournamentError = document.querySelector(".numberTournamentError");
const locations = document.getElementsByClassName("checkbox-input");
const radios = document.querySelectorAll('input[type="radio"]');
const radioError = document.querySelector(".radioError");
const radioColor = document.querySelectorAll(".checkbox-icon");
const conditionsCheckbox = document.getElementById("checkbox1");
const conditionsError = document.querySelector(".conditionsError");

//glogal variable
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
    checkBirthdateValidity();
    checkNumberTournamentValidity();
    checkCitySelected();
    checkConditonsAccepted();

    if (formError === false) {
        // close modal + succes message

        closeModal();
        document.reserve.reset();
        //alert("Merci ! Votre réservation a été reçue.");
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
        formError = true;
        emailError.style.display = "inline";
        email.parentElement.dataset.errorVisible = "true";
    } else {
        emailError.style.display = "none";
        email.parentElement.dataset.errorVisible = "false";
    }
}

// Check birthdate

function checkBirthdateValidity() {
    if (birthdate.value.length === 0) {
        formError = true;
        birthdateError.style.display = "inline";
        birthdate.parentElement.dataset.errorVisible = "true";
    } else {
        birthdateError.style.display = "none";
        birthdate.parentElement.dataset.errorVisible = "false";
    }
}

// Check number of tournament

const checkNumberTournamentValidity = () => {
    const regex = new RegExp("^[0-9]{1,2}$");
    const value = numberTournament.value;

    if (!!value === false || regex.test(value) === false) {
        formError = true;
        numberTournamentError.style.display = "inline";
        numberTournament.parentElement.dataset.errorVisible = "true";
    } else {
        numberTournamentError.style.display = "none";
        numberTournament.parentElement.dataset.errorVisible = "false";
    }
};

// Check city selected

const checkCitySelected = () => {
    let radioChecked = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            radioChecked = true;
        }
    }

    if (radioChecked === false) {
        formError = true;
        radioError.style.display = "block";
    } else {
        radioError.style.display = "none";
    }
};

// Check conditions accepted

const checkConditonsAccepted = () => {
    console.log(conditionsCheckbox.checked);
    console.log(conditionsError);
    if (conditionsCheckbox.checked === false) {
        formError = true;
        conditionsError.style.display = "inline";
    } else {
        conditionsError.style.display = "none";
    }
};
