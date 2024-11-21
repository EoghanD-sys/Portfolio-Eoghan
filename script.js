// bouton
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// click va au top
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
});
}


//bg navbar
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".bgGris");
  if (window.scrollY > 30) {
      navbar.classList.add("navbar-scrolled");
  } else {
      navbar.classList.remove("navbar-scrolled");
  }
});


window.addEventListener('scroll', () => {
  const circle = document.querySelector('.background-circle');
  const scrollY = window.scrollY;
  
  // Déplace légèrement le rond en fonction du défilement
  circle.style.transform = `translate(-50%, ${scrollY * 0.2}px)`;
});

window.addEventListener('scroll', () => {
  const circle = document.querySelector('.background-square');
  const scrollY = window.scrollY;
  
  // Déplace légèrement le rond en fonction du défilement
  circle.style.transform = `translate(-50%, ${scrollY * 0.1}px)`;
});