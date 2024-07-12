//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST & TEST EXECUTION ==========
function test__checkHumbrId(givenId, expectedResult){
    let result = checkHumbrId(givenId);
    let output = document.getElementById("data");
    let passedStatus = "<span style='color:green'> ==PASSED==</span>";
    let failedStatus = "<span style='color:red'> xxFAILEDxx</span>";
    let message = "Value tested: " + givenId + " Expected result: " + expectedResult;

    if(result === expectedResult){
        output.innerHTML += message + passedStatus + "</br>";
    }else{
        output.innerHTML += message + failedStatus + "</br>";
    }

}

test__checkHumbrId("N12345678", true); //test to pass
test__checkHumbrId("n12345678", true); //test to pass
test__checkHumbrId("N89034758375849357", false); //test to fail
test__checkHumbrId("n123", false); //test to fail


//boundary test
test__checkHumbrId("n1234567", false);
test__checkHumbrId("n12345678", true);
test__checkHumbrId("n123456789", false);


//check for other types
test__checkHumbrId(null, false); //test to fail
test__checkHumbrId(undefined, false); //test to fail
test__checkHumbrId("", false); //test to fail

