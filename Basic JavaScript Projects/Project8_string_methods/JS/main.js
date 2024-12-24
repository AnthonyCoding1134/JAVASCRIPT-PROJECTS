

//concat method
function concatSentence() {
    var beginning = "I am ";
    var middle = "getting very ";
    var end = "hungry";

    var fullSentence = beginning.concat(middle, end);
    document.getElementById("concatenate").innerHTML = fullSentence;  //I am getting very hungry
}

//slice method
function sliceFunction() {
    var statement = "Today I'm going to lift weights";
    var slicedStatement = statement.slice(24, 32);
    document.getElementById("slice").innerHTML = slicedStatement; // weights
}

//toUpperCase method
function uppercaseFunction() {
    var guy = prompt("Please enter your name:");
    var nameInCaps = guy.toUpperCase();
    document.getElementById("uppercase").innerHTML = nameInCaps;  //TONY
    
}

// search method
function searchFunction() {
    var locate = "Whats for dinner?";
    document.getElementById('search').innerHTML =  locate.search("dinner");  //10
}

// toString method
function stringFunction() {
    var num1 = 45;
    document.getElementById("string").innerHTML = num1.toString();
}

//toPrecision method
function preciseFunction() {
    var num2 = 23444.456;
    document.getElementById("precision").innerHTML = num2.toPrecision(6);  //23444.5
}

//toFixed method : Converts to string & rounds it to specified # of decimals
function fixFunc() {
    var num3 = 25.356363
    document.getElementById('fixed').innerHTML = num3.toFixed(4); //25.3564
}

//valueOf method: returns the primitive value of a number
function valueFunction() {
    var num4 = 16.78
    document.getElementById("primitive").innerHTML = num4.valueOf();
}