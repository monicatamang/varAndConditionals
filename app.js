// Setting up two arrays of equal length for the user age and subscription status
var age = [9, 13, 18, 22, 30];
var isSubscribed = [true, false, false, true, false];

// Checking through each users' age and subscription status one by one based on the 5 values given, console logging the user subscription status and whether the user is younger than 18 or 18 and older
for (counter = 0; counter < 5; counter++) {
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