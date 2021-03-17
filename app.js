var age = 16; // User is 16 years old
var isSubscribed = true; // User is subscribed

if (age < 18 && isSubscribed === false) {
    console.log("The user is younger than 18 and not subscribed");
} else if (age >= 18 && isSubscribed === false) {
    console.log("The user is 18 or older and not subscribed");
} else if (age < 18 && isSubscribed === true) {
    console.log("The user is younger than 18 and is subscribed");
} else if (age >= 18 && isSubscribed === true) {
    console.log("The user is 18 or older and is subscribed");
} else {
    console.log("The user age is invalid");
}