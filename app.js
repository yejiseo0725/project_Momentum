const age = parseInt( prompt("How old are you?") );

if (isNaN(age)) { // string === true
    console.log("Please write a number!");
} else { // integer === false
    console.log("Thank you for writing your age. :3");
};