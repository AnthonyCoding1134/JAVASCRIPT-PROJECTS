
// Countdown Function
function countdown() {
    var seconds = document.getElementById("seconds").value;



function ticker() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    var time = setTimeout(ticker, 1000);
    if (seconds == -1) {
        alert("Times up!");
        clearTimeout(time);
        timer.innerHTML = "";
    }
    
}
ticker()
} 

// Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// The picture that is shown all depends on which one is assigned the "block" class below
// Picture with the Block class is determined by the slide index variable
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
}
