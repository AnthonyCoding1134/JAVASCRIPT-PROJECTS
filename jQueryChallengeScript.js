$("p").click(function(){
    console.log("You clicked it!");
});



 $('.target').on( "change", function() {
     alert("You attempted to say Jordan, which is not the case.  Please try again");
 });

 $( "#other").on( "click", function() {
    $( ".target").trigger( "change" );
 });

 $( document ).ready(function(){
 
    // Sets up click behavior on all button elements with the alert class
    // that exist in the DOM when the instruction was executed
    $( "button.alert" ).on( "click", function() {
        console.log( "A button with the alert class was clicked!" );
    });
 
    // Now create a new button element with the alert class. This button
    // was created after the click listeners were applied above, so it
    // will not have the same click behavior as its peers
    $( "<button class='alert'>Alert!</button>" ).appendTo( document.body );
});

//hides pragraph somewhat slowly
$( "h2").hide(2000);