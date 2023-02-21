// Enums are just restricted to hold numbers 
// Enums prefered to have constants 
enum myContactNumbers {
  personal = 123456789, // can hold just numbers 
  official1 = 987654321,
  official2 = 1357986420
}
// myContactNumbers.personal = 56467575; // can't modify it

var personalNumber = myContactNumbers.personal; // we can use it. but not modify it
console.log(personalNumber);

enum ErrorCode {
  INVALID_USERNAME = 1001,
  INVALID_PASSWORD = 1002,
  ACCOUNT_DISABLED = 1003,
  INVALID_EMAIL // this will have the value of 1004
}

