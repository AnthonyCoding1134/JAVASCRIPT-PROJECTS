function Submit_Day() {
    var answer;
    var dayOfWeek = document.getElementById('day').value;
    var string1 = " will be exercised today!";

    switch(dayOfWeek){
        case "Monday":
            answer = "Chest " + string1;
        break;

        case "Tuesday":
            answer = "Legs " + string1;
        break;

        case "Wednesday":
        
        case "Thursday":
            
        case "Friday":
            answer = "Nothing " + string1 + " You're off!"
        break;

        case "Saturday":
            answer = "Biceps and back " + string1;
        break;

        case "Sunday":
            answer = "shoulders and triceps " + string1;
        break;

         default:
            answer = "Please enter in a day as shown in the list";

        
        }

        document.getElementById('workout').innerHTML = answer;
}