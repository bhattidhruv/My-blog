var slideIndex = 0;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("displaySlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (n > slides.length - 1)
        slideIndex = 0
    if (n < 0)
        slideIndex = slides.length - 1
    slides[slideIndex].style.display = "block";
}