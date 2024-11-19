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
  document.body.scrollTop = 0; // pour Safari
  document.documentElement.scrollTop = 0; // pour Chrome, Firefox, IE et Opera
}

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