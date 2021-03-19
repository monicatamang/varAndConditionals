// Setting up two arrays of equal length for the user age and subscription status
var age = [9, 13, 18, 22, 30];
var isSubscribed = [true, false, false, true, false];

// Storing the length of the age array into a new variable
// Chosen to use the length of the age array arbitrarily since both arrays are the same length
var arrayLength = age.length;

// Checking through each users' age and subscription status one by one based on the length of the arrays, console logging the user subscription status and whether the user is younger than 18 or 18 and older
for (counter = 0; counter < arrayLength; counter++) {
    if (age[counter] < 18 && (!isSubscribed[counter])) {
        console.log("The user is younger than 18 and not subscribed");
    } else if (age[counter] >= 18 && (!isSubscribed[counter])) {
        console.log("The user is 18 or older and not subscribed");
    } else if (age[counter] < 18 && (isSubscribed[counter])) {
        console.log("The user is younger than 18 and is subscribed");
    } else if (age[counter] >= 18 && (isSubscribed[counter])) {
        console.log("The user is 18 or older and is subscribed");
    } else {
        console.log("The user age is invalid");
    }
}