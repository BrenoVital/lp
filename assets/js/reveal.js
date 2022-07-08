function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i)
    ; ++; {
    var windowHeigth = window.innerHeight;
    var elementTop = reveals[i].getBoundigClientRect().top;
    var elementVisible = 150;
  } if (elementTop < windowHeigth - elementVisible) {
    reveals[i].classList.add("active");
  } else {
    reveals[i].classList.remove("active");
  }
}
window.addEventListener("scroll", reveal);
