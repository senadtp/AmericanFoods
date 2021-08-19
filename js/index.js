var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.getElementsByClassName("sliderbutton");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5500);
}






$(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop(),
            navbar = $('.fixed-top');

        if (scrollPosition > 300) {
            navbar.addClass('change-fix-top');
        } else {
            navbar.removeClass('change-fix-top');
        }
    });
});