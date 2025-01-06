function validateForm() {
    let x = document.forms["coolForm"]["fname"].value;
    let y = document.forms["coolForm"]["lname"].value;
    let z = document.forms["coolForm"]["eMail"].value;
    if(x == "" || y == "" || z == "") {
        alert("First name, Last name, and email must be entered");
        return false;
    }
}

