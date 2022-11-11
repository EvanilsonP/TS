var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
;
// never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
;
var result = generateError('An error occured!', 500);
console.log(result);
var myName = 'Evanilson P';
console.log(myName);
