function myMathFunc(){
    var a = 5;
    var b = 3;
    var c = a + b;
    document.getElementById('Math').innerHTML=c;
}

function subtracting(numb){
   var newNum = numb - 2;
    document.getElementById('Subtractor').innerHTML=newNum;
}


function letsMultiply(){
   var numCoresPerCPU=5;
   var totalCPUS=12;
   var totalCores = numCoresPerCPU * totalCPUS;
   document.getElementById('multiplier').innerHTML = totalCores;
}

function letsDivide(){
    var totalMonitors = 100;
    var monitorsPerWorkstation = 2;
    var totalWorkstations = totalMonitors / monitorsPerWorkstation;
    document.getElementById('divider').innerHTML=totalWorkstations;
}


function MultipleOperators(){
    var Basic_Math = (48 + 12) / 3 + 25;
    document.getElementById('basic').innerHTML = Basic_Math;
}

function modulusOperators(){
    var modulus = 12 % 5;
    document.getElementById('mod').innerHTML = modulus;
}
function negationOperator(){
    var negator = 5;
    document.getElementById('negation').innerHTML = -negator;
}

function increment() {
var incrementor = 5;
incrementor++;
document.getElementById('incrementor').innerHTML = incrementor;
}

var pencils = 25;
pencils--;
document.write("The number of pencils we have is " + pencils);

// document.write(br);
document.write("<br>");
document.write("<br>");

// window.alert(Math.random() * 50);
document.write(" a random number is " + Math.random() * 20);


function roundNumber() {
document.getElementById("demo").innerHTML = Math.round(4.6);
}

document.write("<br>");
document.write("<br>");

document.write("7.8 rounded down to nearest integer is " + Math.floor(7.8));