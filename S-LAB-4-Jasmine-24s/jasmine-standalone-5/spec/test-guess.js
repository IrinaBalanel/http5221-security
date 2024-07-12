describe("Test-to-pass", function(){
    describe("Successful guess", function(){
        it("should return 'You guessed it!' when the correct number is entered.", function(){
            var myGuess = 4;
            expect(guessNum(myGuess)).toEqual("You guessed it!");
        });
    }); //end of suite
    
    describe("Guess is within the range", function(){
        it("should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var myGuess = 7;
            expect(guessNum(myGuess)).toEqual("Guess again.");
        });
    }); //end of suite

});//end of the Test-to-pass




describe("Test-to-fail", function(){
    
    describe("Guess is not a number", function(){
        it("should return 'A number was not input.' if the value entered is not a number.", function(){
            var myGuess = "n";
            expect(guessNum(myGuess)).toEqual("A number was not input.");
        });
    }); //end of suite

    describe("Guess is empty string", function(){
        it("should return 'A value was not entered.' if it receives an empty string.", function(){
            var myGuess = "";
            expect(guessNum(myGuess)).toEqual("A value was not entered.");
        });
    }); //end of suite

    describe("Guess is -50", function(){
        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is a number outside of the allowed range of guessing values.", function(){
            var myGuess = -50;
            expect(guessNum(myGuess)).toEqual("Way off!!!! Pick between 1 and 10.");
        });
    }); //end of suite


});//end of the Test-to-fail



    
describe("Boundary test", function(){
    describe("Guess is 0", function(){
        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is a number outside of the allowed range of guessing values.", function(){
            var myGuess = 0;
            expect(guessNum(myGuess)).toEqual("Way off!!!! Pick between 1 and 10.");
        });
    }); //end of suite

    describe("Guess is 1", function(){
        it("should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var myGuess = 1;
            expect(guessNum(myGuess)).toEqual("Guess again.");
        });
    }); //end of suite

    describe("Guess is 2", function(){
        it("should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var myGuess = 2;
            expect(guessNum(myGuess)).toEqual("Guess again.");
        });
    }); //end of suite

    describe("Guess is 9", function(){
        it("should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var myGuess = 9;
            expect(guessNum(myGuess)).toEqual("Guess again.");
        });
    }); //end of suite

    describe("Guess is 10", function(){
        it("should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer.", function(){
            var myGuess = 10;
            expect(guessNum(myGuess)).toEqual("Guess again.");
        });
    }); //end of suite

    describe("Guess is 11", function(){
        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is a number outside of the allowed range of guessing values.", function(){
            var myGuess = 11;
            expect(guessNum(myGuess)).toEqual("Way off!!!! Pick between 1 and 10.");
        });
    }); //end of suite
}); //end of boundary test




