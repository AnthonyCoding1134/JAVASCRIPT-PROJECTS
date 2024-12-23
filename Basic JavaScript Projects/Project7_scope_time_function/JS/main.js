var yearBorne = 1987;

function parentFunc() {
    document.getElementById("ageResults").innerHTML = calcAge();
    function calcAge() {
        var age = 2024 - yearBorne;
        return age;
    }
   
}

function calcVoterEligible() {
    document.getElementById(eligibleResults).innerHTML = (age >= 21) ? "You can vote" : "You cant vote";
    console.log(age);
}

function getDate() {
    if (new Date().getHours() < 15)
        document.getElementById("date").innerHTML = "How is your day so far?";
}

var funds = 6;

function reloadDuncanCard() {
    if (funds <= 5) {
        document.getElementById('reload').innerHTML = "time to add $ to your account";
    }
    else {
        document.getElementById("reload").innerHTML = "You have plenty of funds remaining";
    }

}

function Age_Function() {
    age = document.getElementById('Age').value;
    if (age >= 18) {
        document.getElementById("How_old_are_you").innerHTML = "You can vote!"
    } else {
        document.getElementById("You cant vote!");
    }
}

/*function rebootFunction() {
    frozen = document.getElementById('timeFrozen').value;
    if(frozen >= 30) {
        document.getElementById('conditional').innerHTML = "Turn it off & turn it back on";
    } else {
        document.getElementById('conditional').innerHTML = "Wait a while";

    }
} */

// Function using conditional if/else
function rebootFunction() {
    frozen = document.getElementById('timeFrozen').value;
    if(frozen >= 30) {
        instructions = "Turn it off & turn it back on";
    } else {
        instructions = "Wait a while";

    }
    document.getElementById('conditional').innerHTML = instructions;
    console.log(instructions);
}


// Function using conditional if/else if/else
function Time_Function() {
    var time = new Date().getHours()
    var greeting;
   
    if (time > 0 && time < 12) {
        greeting = "It's the morning!"
    } else if 
        (time >= 12 && time < 17) {
            greeting = "It's the afternoon!"
    } else {
            greeting = "It's the evening!"
        }
    document.getElementById("Time_of_Day").innerHTML = greeting;
    
}