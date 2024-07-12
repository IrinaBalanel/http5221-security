window.onload = function () {
    "use strict";
    var submit = document.querySelector(".login__button");
    

    submit.addEventListener("click", function () {
        var outputArea = document.querySelector(".output");
        var inputName = document.querySelector(".login__user");
        var inputPass = document.querySelector(".login__password");
        var outputName = document.querySelector(".output__user");
        var outputPass = document.querySelector(".output__pass");

        //Validation
        if (inputName.value === "") {
            inputName.classList.add("login__txtbox_error");
            inputName.focus();
            return false;
        }
        if (inputPass.value === "") {
            inputPass.classList.add("login__txtbox_error");
            inputPass.focus();
            return false;
        }

        inputName.classList.remove("login__txtbox_error");
        inputPass.classList.remove("login__txtbox_error");
        outputArea.style.display = "block";
        outputName.innerHTML = inputName.value;
        outputPass.innerHTML = inputPass.value;

        return false;
    });
};