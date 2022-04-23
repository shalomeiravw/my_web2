function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }

var btnScrollTop = document.getElementById(btnScrollTop)
var rootElement = document.documentElement
function scrollToTop(){
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
btnScrollTop.addEventListener("click", scrollToTop)
  

// const scrollTop = document.getElementById("btnScrollTop")
// scrollTop.addEventListener("click", function scrollTopFunction(){
//     // window.scrollTo(0,0);

//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior:"smooth"
//     });
// });

var subjectt = document.getElementById(sub).value;
var messages = document.getElementById(msg).value;
function ValidateEmail(Email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
// alert("Valid email address!");
// document.myForm.Email.focus();
return true;
}
else
{
alert("Email is invalid");
document.myForm.Email.focus();
return false;
}
}
function validateForm() {
    var x = document.myForm["myForm"]["Email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    else{
        ValidateEmail(Email);
    }
}


// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  var slideIndex = 1;
  showSlides(slideIndex);
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }


  function openModal2() {
    document.getElementById("myModal2").style.display = "block";
  }
  function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
  }
  var slideIndex = 1;
  showSlides2(slideIndex);
  function plusSlides2(n) {
    showSlides2(slideIndex += n);
  }
  function currentSlide2(n) {
    showSlides2(slideIndex = n);
  }
  function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    var captionText = document.getElementById("caption2");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  function openModal3() {
    document.getElementById("myModal3").style.display = "block";
  }
  function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
  }
  var slideIndex = 1;
  showSlides3(slideIndex);
  function plusSlides3(n) {
    showSlides3(slideIndex += n);
  }
  function currentSlide3(n) {
    showSlides3(slideIndex = n);
  }
  function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo3");
    var captionText = document.getElementById("caption3");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  function openModal4() {
    document.getElementById("myModal4").style.display = "block";
  }
  function closeModal4() {
    document.getElementById("myModal4").style.display = "none";
  }
  var slideIndex = 1;
  showSlides4(slideIndex);
  function plusSlides4(n) {
    showSlides4(slideIndex += n);
  }
  function currentSlide4(n) {
    showSlides4(slideIndex = n);
  }
  function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides4");
    var dots = document.getElementsByClassName("demo4");
    var captionText = document.getElementById("caption4");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }