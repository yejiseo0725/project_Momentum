const age = parseInt( prompt("How old are you?") );

if (isNaN(age) || age < 0) { // string === true
    console.log("Please write a real positive number!");
} else if(age < 18) {
    console.log("You are baby.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink! :D");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise..");
} else if (age > 80) {
    console.log("You can do whatever you want.");
}