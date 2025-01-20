function getMsg(){
    //STEP 1: Setup the XML HTTP Request object

    let ajaxRequest = new XMLHttpRequest();

    //Get input value of name from user after
    //request has been made
    let inputVal = document.getElementById("fullName").value;


    //Func to display user input value once 
    // request has been received
    // The function below is a callback function. It executes code in response to an event
    // The event here is onload (when server data has been loaded)
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }


    // STEP 2: Tell the server to get response.html & display it w/o refreshing entire page
    //open method tells the server about request type (GET) & establishes connection
    // True indicates request is being handled asynchronously
    ajaxRequest.open('GET', 'response.html', true)


    //STEP 3: Defines the AJAX response callback method that 
    // establishes if response was successful & where data should be displayed
    // onreadystatechange property defines function (callback) to be executed when the readyState changes.
    
    ajaxRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content'). innerHTML = ajaxRequest.responseText;
        }
    }

    /*
    5 diff readyStates in AJAX:

    0. The request is not initialized
    1. The request has been set up
    2. The request has been sent
    3. The request is in process
    4. The request is complete  */

    // status code 200 means successful response from server
    // status code 404 means data not found by server
    // responseText value returns the text received from a server following a request being sent


    //STEP 4: Send the request
    ajaxRequest.send();
}