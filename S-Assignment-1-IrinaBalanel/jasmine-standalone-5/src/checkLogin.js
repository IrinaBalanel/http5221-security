/**
 * checkLogin function checks provided user inputs and validates them against existing ones.
 * This function requires the following parameters:
 * @param {string} nameInput - user name value
 * @param {string} passInput - password value
 * @return {boolean} - true if the inputs are valid, or defined error messages if they are not
 */

var invalidData = "Invalid Username or Password.";
var emptyName = "No username entered.";
var emptyPass = "No password entered.";

function checkLogin(nameInput, passInput){
    var myUName = "irinabalanel";
    var myPass = "ASDqwe123$";
    if(md5Encrypt(nameInput) == md5Encrypt(myUName) && md5Encrypt(passInput) == md5Encrypt(myPass)){
        return true;
    } else if(nameInput === ""){
        return emptyName;
    } else if(passInput === ""){
        return emptyPass;
    } else {
        return invalidData;
    }
} 
