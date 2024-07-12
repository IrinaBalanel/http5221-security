window.onload = function () {
    "use strict";

    var submit = document.querySelector(".login__button");
    submit.addEventListener("click", function () {
        // var outputMess = document.querySelector(".output__user");
        var outputMess = document.querySelector(".output");
        var inputName = document.querySelector(".login__user").value;
        var inputPass = document.querySelector(".login__password").value;
        var successMess = "Welcome back!";
        var result = checkLogin(inputName, inputPass);
        console.log(result);

        if(result === true){
            outputMess.innerHTML = successMess;
            
        } else {
            outputMess.innerHTML = result;
        }
        outputMess.style.display = "block";

    });

}