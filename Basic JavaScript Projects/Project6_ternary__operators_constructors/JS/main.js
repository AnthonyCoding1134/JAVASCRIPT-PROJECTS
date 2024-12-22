
//Ternary Operator
function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}


function check_Eligibility(){
    var applicantAge, can_Vote;
    applicantAge = document.getElementById("age").value;
    can_Vote = (applicantAge >= 18) ? "You are old enough" : "You are not old enough";
    document.getElementById("vote").innerHTML = can_Vote + " to vote in the election";

}
//Constructor Function
function Vehicle (Make, Model, Year, Color){
    this.Car_Makee = Make;
    this.Car_Model = Model;
    this.Car_Year = Year;
    this.Car_Color = Color;
}

// Using the constructor to create objects
var Anthony = new Vehicle("Subaru", "Forestor", 2022, "Green");
var Jordan = new Vehicle("Honda", "Civic", 2015, "Silver");
var Erik = new Vehicle("Ford", "F150", 2018, "Black");

//Using function to output variables derived from function in the browser
function myThisFunction() {
    document.getElementById("Keywords_And_Constructors").innerHTML = "Erik drives a  " + Erik.Car_Color + "-colored " 
  + Erik.Car_Makee  + " " + Erik.Car_Model + " manufactured in " + Erik.Car_Year;
}

//Constructor Function
function pizza(Size, Cheese, Topping){

    this.Size_Order = Size;
    this.Cheese_Order = Cheese;
    this.Topping_Order = Topping;
    
}
// Using the constructor to create object
var order1 = new pizza("Large","Cheese", "Pepperoni");

//Using function to output variables derived from function in the browser
function pizzaOrder() {
document.getElementById("New_and_This").innerHTML = "An order for a " + order1.Size_Order + " " + order1.Cheese_Order + 
" pizza with " + order1.Topping_Order + " has been placed"; 

}


function Hardware(Mice, Keyboards, Monitors) {
    this.Mouse_Order = Mice;
    this.Keyboard_Order = Keyboards;
    this.Moniter_Order = Monitors;
}

var decemberOrder = new Hardware (12, 10, 3);

function orderHardware() {
    document.getElementById("Hardware_Order").innerHTML = "You have ordered " + decemberOrder.Mouse_Order + " mice, "
    + decem
    berOrder.Keyboard_Order + " keyboards, and " + decemberOrder.Moniter_Order + "monitors.";
}
//nested functions have access to parent functions
function myNestedFunc() {
    document.getElementById("Nested_Function").innerHTML = multiplyFunc();
    function multiplyFunc() {
        var factor = 2;
        function timesFive() {
        factor *= 5;
       }
       timesFive();
       return factor;
    }
}