// JavaScript source code
function validate(e) {

    hideErrors();


    if (formHasErrors()) {

        e.preventDefault();


        return false;
    }



    return true;


}

function resetForm(e) {

    if (confirm('Clear order?')) {

        hideErrors();


        document.getElementById("fullname").focus();

        return true;
    }


    e.preventDefault();

    return false;
}
function formHasErrors() {

    let errorFlag = false;
    let requiredFields = ["fullname", "phonenumber", "email"];
    for (let i = 0; i < requiredFields.length; i++) {
        let textField = document.getElementById(requiredFields[i]);
        if (textField.value == null || textField.value.trim() == "") {
            document.getElementById(requiredFields[i] + "_error").style.display = "inline";
            if (!errorFlag) {
                textField.focus();
                textField.select();
            }
            errorFlag = true;
        }
    }

    let phoneRegex = new RegExp(/^\d{10}$/);
    let phoneNumber = document.getElementById("phonenumber").value;

    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById("invalidphonenumber_error").style.display = "inline";

        if (!errorFlag) {
            document.getElementById("phonenumber").focus();
            document.getElementById("phonenumber").select();
        }
        errorFlag = true;
    }

    let emailRegex = new RegExp(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/);
    let email = document.getElementById("email").value;
    if (!emailRegex.test(email)) {
        document.getElementById("emailformat_error").style.display = "inline";
        if (!errorFlag) {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }
        errorFlag = true;
    }
    return errorFlag;
}
function hideErrors() {

    let error = document.getElementsByClassName("error");

    for (let i = 0; i < error.length; i++) {

        error[i].style.display = "none";
    }
}

function load() {

    document.getElementById("contactform").addEventListener("submit", validate);


    hideErrors();
    document.getElementById("contactform").addEventListener("reset", resetForm);
}
document.addEventListener("DOMContentLoaded", load);