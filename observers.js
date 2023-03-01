const change =document.getElementById("zz");
const naav =document.getElementsByClassName("nav ul li a")



window.onscroll = function() {myFunction()};

function myFunction() {
    var testDivFromTop = document.getElementById("zz").offsetTop;
    var pageHeight =  window.innerHeight;
    if (document.body.scrollTop > testDivFromTop - pageHeight || document.documentElement.scrollTop > testDivFromTop - pageHeight ) {
      change.classList.add("p2-alt");
      naav.classList.add("nav-alt");
    }
    else(
      change.classList.remove("p2-alt")
    )
}


