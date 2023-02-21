"use strict";
// Enums are just restricted to hold numbers 
// Enums prefered to have constants 
var myContactNumbers;
(function (myContactNumbers) {
    myContactNumbers[myContactNumbers["personal"] = 123456789] = "personal";
    myContactNumbers[myContactNumbers["official1"] = 987654321] = "official1";
    myContactNumbers[myContactNumbers["official2"] = 1357986420] = "official2";
})(myContactNumbers || (myContactNumbers = {}));
// myContactNumbers.personal = 56467575; // can't modify it
var personalNumber = myContactNumbers.personal; // we can use it. but not modify it
console.log(personalNumber);
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["INVALID_USERNAME"] = 1001] = "INVALID_USERNAME";
    ErrorCode[ErrorCode["INVALID_PASSWORD"] = 1002] = "INVALID_PASSWORD";
    ErrorCode[ErrorCode["ACCOUNT_DISABLED"] = 1003] = "ACCOUNT_DISABLED";
    ErrorCode[ErrorCode["INVALID_EMAIL"] = 1004] = "INVALID_EMAIL"; // this will have the value of 1004
})(ErrorCode || (ErrorCode = {}));
