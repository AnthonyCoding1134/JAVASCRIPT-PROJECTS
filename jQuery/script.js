// $ is selector & document specifies we are targeting entire html doc
// ready property specifies the doc should finish loading before the jQuery code is executed
// func keyword passed in as argument to specify we will run the code between {}
$(document).ready(function(){
    function shineLoop(){

        // Targeting any html elements with css class .shine
        //backgroundPositionX property sets image on the X axis
        //3000 = 3 seconds
        // chaining mutliple event methods (animate)

        $(".shine").animate({backgroundPositionX: '1600px'}, 3000)
        .animate({backgroundPositionX: '-800px'}, 3000);
    };
    

    // used to repeatedly call a func at specified interval
    setInterval(shineLoop, 0);

    //Shrinks header size when the document is scrolled down by 50 pixels
    $(document).on("scroll", function(){
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({
        //triggers images to slide down one after the other
        //mouseenter similar to mouseover but only triggered when mouse enters the element (not child element)
        //show event handler
        mouseenter: function() {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //Triggers images to slide up & hide each title one after the other
        // when user's mouse leaves the div area w/ the #classicCars ID
             mouseleave: function() {
            //reverses the times so last title hides first & first title hides last
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    })

        //targeting div element with question class
        //wuse the 'on' event method w/the click event handler
        // inside function we use "this" keyword to refer to element (div w/ 'question' class) recvd by event handler
    $('div.question').on('click', function() {
        //next element return the next sibling element to the div.question element (div.answer).  
        // .slideToggle creates toggle effect
        $(this).next().slideToggle('slow');
    })
})