
// an object within function
function getStudent() {
    var Student = {
        StudentID: 4736363,
        FirstName: "Bob",
        LastName: "Smith",
        Major: "IT",
        Grade: "Sophomore",
        GPA: 3.3
    };
    //outputs student ID
    document.getElementById("Dictionary").innerHTML = Student.StudentID;
}


function getFastFood() {
var fastFoodRestaurant = {
    Name: "Mcdonalds",
    NumEmployees: 27,
    NumOfTables: 16,
    //overwrites previous value for this key
    NumOfTables: 17,
    NumOfBurgers: 8,
}
    document.getElementById('fastFood').innerHTML = fastFoodRestaurant.NumOfTables;


};


function getNiceRestaurant(){
var NiceRestaurant = {
    Name: "Cafe Bravo",
    NumEmployees: 24,
    NumOfTables: 12,
    NumOfEntrees: 11,
    NumOfTables: 13,
};
//deleting the NumEmployees key
delete NiceRestaurant.NumEmployees
//outputs "undefined" because we deleted it above
 document.getElementById("fineDining").innerHTML = NiceRestaurant.NumEmployees;
}
