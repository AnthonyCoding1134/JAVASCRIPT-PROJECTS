//type coercion



document.write(typeof("boo"));
document.write("<br>");
document.write(typeof(true));
document.write("<br>");

//apprently true coerces to "1"
document.write(1 + true);
document.write("<br>");

document.write("5" + 5);
document.write("<br>");
//document.write(isNaN('this is a string'));
document.write("<br>");
//document.write(isNaN(2655655.654545656));

document.write("<br>");
document.write(1075E3);


function displayInfinite() {
document.getElementById("infinite").innerHTML = (-1E422);

}



document.write("<br>");
document.write(25 > 26);

document.write("<br>");
document.write(6 > 5 && 2  > 3);

document.write("<br>");
document.write(6 > 5 || 2  > 3);

document.write("<br>");
document.write(6 > 4 &&   3 >= 3);

console.log(25 / 5);
console.log(9 * 7);
console.log(5 >= 121);

console.log(12 == (10 + 2));
console.log(12 == (2 * 7));
console.log("Triple equal signs")
console.log(3 === "3");
console.log(25 === 24);
console.log("burger" === "burger")
console.log("burger" === "burgers")
console.log(3 === "4");

// Not operator
function notOperator(){
    document.getElementById("not").innerHTML = !(100 > 1);
    document.getElementById("moreNot").innerHTML = !(2 >= 1000);

}




