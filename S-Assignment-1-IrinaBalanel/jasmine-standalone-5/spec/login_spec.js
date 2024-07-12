//USE REGEX TO MATCH HASH FORMAT

//RegEx: https://stackoverflow.com/questions/21517102/regex-to-match-md5-hashes
//toMatch: https://jasmine.github.io/api/2.6/matchers.html

describe("md5Enscrypt function", function(){
    it("should return a string of the hashed value(as 32 hexadecimal characters)", function(){
        var myUName = "irinabalanel";
        var myPass = "ASDqwe123$";
        // expect(md5Encrypt(myPass)).toString("052395cb0fcd1f92bb9001d9e39f5309");
        // expect(md5Encrypt(myUName)).toString("2ce9382681df81c1e490c09ed8f3b7d1");
        var regEX = /^[a-f0-9]{32}$/i;
        expect(md5Encrypt(myUName, myPass)).toMatch(regEX);
    });//end of suite
    
}); //end of md5Enscrypt function test

describe("checkLogin function: Success", function(){
    it("should use the md5Encrypt function, and return the Boolean true if the username and the password match a known username and matching password.", function(){
        var myUName = "irinabalanel";
        var myPass = "ASDqwe123$";
        expect(checkLogin(myUName, myPass)).toEqual(true);
    });
}); 

describe("checkLogin function: Invalid User Name", function(){
    it("should return 'Invalid Username or Password.' if the username input does not match a known username.", function(){
        var myUName = "irina";
        var myPass = "ASDqwe123$";
        expect(checkLogin(myUName, myPass)).toEqual("Invalid Username or Password.");
    });
});

describe("checkLogin function: Invalid Password", function(){
    it("should return 'Invalid Username or Password.' if the password input does not match a known password.", function(){
        var myUName = "irinabalanel";
        var myPass = "ASDqwe";
        expect(checkLogin(myUName, myPass)).toEqual("Invalid Username or Password.");
    });
});

describe("checkLogin function: Valid User Name in Password Input", function(){
    it("should return 'Invalid Username or Password.' if valid username is input with an invalid password.", function(){
        var myUName = "ASDqwe123";
        var myPass = "irinabalanel";
        expect(checkLogin(myUName, myPass)).toEqual("Invalid Username or Password.");
    });
});

describe("checkLogin function: No User Name", function(){
    it("should return 'No username entered.' if the username is an empty string.", function(){
        var myUName = "";
        var myPass = "ASDqwe123$";
        expect(checkLogin(myUName, myPass)).toEqual("No username entered.");
    });
});

describe("checkLogin function: No Password", function(){
    it("should return 'No password entered.' if the password is an empty string.", function(){
        var myUName = "irinabalanel";
        var myPass = "";
        expect(checkLogin(myUName, myPass)).toEqual("No password entered.");
    });
});