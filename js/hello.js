console.log("I am in the hello.js")

//get the date and time
var today = new Date();
var hoursNow = today.getHours();

//display the greeting message
var greeting = "";
if (hoursNow<=12){
  greetings = "Good Morning";
}
else {
  greetings = "Good Afternoon";
}

// write to the document
document.write(greetings);