
//while loop
function Call_Loop() {
    var x = 1;
    var statement = ""; 

    while(x < 5) {
    statement += x + " time doing the loop! ";
  
    x++;
   }
   document.getElementById("Loop").innerHTML = statement;
   var length = statement.length;
   document.getElementById("Length").innerHTML = length;
}

//for loop
function for_Loop() {
    var faveSingers = ["Bob Dylan", "Eric Clapton", "Celine Dion"];
     var faveSingerStatement = "";

    for (y = 0; y < faveSingers.length; y++)
    {
        faveSingerStatement += faveSingers[y] + " is my " + (y + 1) + " fave singer ";
    }
    document.getElementById("List_Of_Singers").innerHTML = faveSingerStatement;
}

//array within function
function array_Function() {
    var baseballGreats = ["Babe Ruth", "Joe Dimaggio", "Mickey Mantle"]
    var opinion = "";

    for(i = 0; i < baseballGreats.length; i++) {
   
   //break statement: this breaks out of the loop
    if(i === 1) {break; }
    opinion += baseballGreats[i] + " was the best ";
    }
    document.getElementById("Array").innerHTML = opinion;
}

function array_Function2() {
    var bballGreats = ["Michael Jordan", "Larry Bird", "Lebron James"]
    var opinion = "";

    for(i = 0; i < bballGreats.length; i++) {
   
   
    //continue statement: this skips the steps where i= 1 & continues with the rest
    if(i === 1) {continue; }
    opinion += bballGreats[i] + " was the greatest ";
    }
    document.getElementById("anotherArray").innerHTML = opinion;
}

function constant_Function() {
    const carParts = {engine: "diesel", transmission: "manual", brakes: "hydraulic"};
    carParts.Steering = "power";
    carParts.Tires = "all-terrain";
    carParts.transmission = "automatic";
    console.log(carParts.engine);
    console.log(carParts.brakes);
    document.getElementById('Constant').innerHTML =  "The car had a " + carParts.engine + 
    " engine with a " + carParts.transmission + " transmission, " + carParts.brakes + " brakes and " + carParts.Steering + " steering.";

}

// let & const keyword : can have global scope, function scope, or block scope
// var keyword:  cannot have block scope (within curly braces)  Variable declared within block can be accessed anywhere


var num7 = thisFunction(4, 3);
document.getElementById('demo').innerHTML = num7;

function thisFunction(a, b) {
    return a * b;  
  }  

  let myCar = {
    make: "Subaru ",
    model: "Forester ",
    year: "2021 ",
    color: "red",
    description: function() {
        return " This car is a " + this.year + this.make + this.model + " in " + this.color;
    }
  }
  document.getElementById("car").innerHTML = myCar.description();






 

 
 
