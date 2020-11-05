function myFunction() {
    var element = document.getElementById("toggle");
    element.classList.toggle("menu-active");
}


var underMenu = ["HOME", "ABOUT", "SERVICES"];

function transitionHome() {
    document.getElementById("transitionText").innerHTML = underMenu[0];  
}
function transitionAbout() {
    document.getElementById("transitionText").innerHTML = underMenu[1];  
}
function transitionServices() {
    document.getElementById("transitionText").innerHTML = underMenu[2];  
}

window.onload = () => {
    const  transition_el = document.querySelector(".transition")
    const anchors = document.querySelectorAll("li a");

    setTimeout(() => {
        transition_el.classList.remove("is-active");

   
    }, 700);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        
    anchor.addEventListener("click", e => {
        e.preventDefault();
        let target = e.target.href;

        transition_el.classList.add("is-active");

        setTimeout(() => {
            window.location.href = target;
        }, 700)
    });
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