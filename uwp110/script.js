// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // NAVIGATION
    var start = document.getElementById('start');
    var keyboards = document.getElementById('keyboards');
    var history = document.getElementById('history');

    var navlinks = document.getElementsByTagName('li');

    navlinks[0].addEventListener('click', function() {
      start.style.display = "block";
      keyboards.style.display = "none";
      history.style.display = "none";
    });

    //side links
    navlinks[1].addEventListener('click', showKeyboards);
    //side links
    navlinks[2].addEventListener('click', showHistory);

    //refresh button
    navlinks[3].addEventListener('click', function(){
      location.reload();
    });

    //from start
    navlinks[4].addEventListener('click', showKeyboards);
    //from start
    navlinks[5].addEventListener('click', showHistory);

    function showKeyboards () {
      start.style.display = "none";
      keyboards.style.display = "block";
      history.style.display = "none";
    }

    function showHistory () {
      start.style.display = "none";
      keyboards.style.display = "none";
      history.style.display = "block";
    }

    ///

    //START links
    var why = document.getElementById('why');
    var instructions = document.getElementById('instructions');
    var concept = document.getElementsByClassName('concept');
    var moreInfo = document.getElementById('moreInfo');
      var nextButton = document.getElementsByClassName('nextButton');

    nextButton[0].addEventListener('click', function(){
      why.style.display = 'block';
      instructions.style.display = 'none';
    });

    nextButton[1].addEventListener('click', function(){
      instructions.style.display = 'block';
    });

    nextButton[2].addEventListener('click', function(){
      concept[3].style.display = 'block';
    });

    ///

    //from concept to slideshow
    var nextSlides = document.getElementsByClassName('nextSlides');
    var container = document.getElementsByClassName('container');

    nextSlides[0].addEventListener('click', function () {
      container[0].style.display = 'block';
    });


    nextSlides[1].addEventListener('click', function () {
      container[1].style.display = 'block';
    });

    nextSlides[0].onclick = function () {imageSlider()};
    nextSlides[1].onclick = function () {imageSlider2()};


    /////////////////////////////////////////////////////////////////////////////

    //KEYBOARDS
    function imageSlider () {
    document.getElementById('prev').onclick = function() {plusSlides(-1)};
    document.getElementById('next').onclick = function() {plusSlides(1)};

    document.getElementsByClassName('dot')[0].onclick = function() {currentSlide(1)};
    document.getElementsByClassName('dot')[1].onclick = function() {currentSlide(2)};
    document.getElementsByClassName('dot')[2].onclick = function() {currentSlide(3)};
    document.getElementsByClassName('dot')[3].onclick = function() {currentSlide(4)};

    //defined the value of slideIndex
    var slideIndex = 1;
    showSlides(slideIndex); //function that calls the value of slideIndex

    //prev = plusSlides (-1);
    //next = plusSlides (1);
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    //currentSlide(1)
    //currentSlide(2)
    //currentSlide(3)
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName('slides')
      var dot = document.getElementsByClassName('dot');

      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
      }

        slides[slideIndex - 1].style.display = "block";
        dot[slideIndex - 1].className += " active";
      }
} //end of imageSlider function


//HISTORY
function imageSlider2 () {
document.getElementById('prev2').onclick = function() {plusSlides2(-1)};
document.getElementById('next2').onclick = function() {plusSlides2(1)};

document.getElementsByClassName('dot2')[0].onclick = function() {currentSlide2(1)};
document.getElementsByClassName('dot2')[1].onclick = function() {currentSlide2(2)};
document.getElementsByClassName('dot2')[2].onclick = function() {currentSlide2(3)};

//defined the value of slideIndex
var slideIndex2 = 1;
showSlides2(slideIndex2); //function that calls the value of slideIndex

//prev = plusSlides (-1);
//next = plusSlides (1);
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

//currentSlide(1)
//currentSlide(2)
//currentSlide(3)
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var j;
  var slides2 = document.getElementsByClassName('slides2');
  var dot2 = document.getElementsByClassName('dot2');

  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}

  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }

  for (j = 0; j < dot2.length; j++) {
    dot2[j].className = dot2[j].className.replace(" active", "");
  }

    slides2[slideIndex2 - 1].style.display = "block";
    dot2[slideIndex2 - 1].className += " active";
  }
} //end of imageSlider2 function
});
