function crazyFunction () {
    var string1 = "this is gonna be wild";
    var string2 = "lets do this!";
    document.getElementById("target").innerHTML = string1;
    target.style.backgroundColor = "blue";
}


// This gets the html element with ID "concatenate" (h2) & changes its content to the concentated string declared in oneSentence variable below
function timeToConcatenate() {
    var oneSentence = "I am learning Javascript ";
    oneSentence += " prior to C# and asp.net";
    document.getElementById('concatenate').innerHTML = oneSentence;
}