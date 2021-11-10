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
const modalClose = document.querySelector(".close"); // Select the close class
const firstNameInput = document.getElementById("firstName");
const submitBtn = document.querySelector(".btn-submit");

//glogal var
let formError = false;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formError = false;
    checkFirstNameValidity();
});

////// Functions ///////

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
    const regex = new RegExp("[a-zA-Z]{2,15}");
    const value = firstNameInput.value;

    if (regex.test(value)) {
        console.log("Pass");
    } else {
        console.log("Reject");
        formError = true;
        //firstNameInput.dataset["error"] = true;
    }
}
