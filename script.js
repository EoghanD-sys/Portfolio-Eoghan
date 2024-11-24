

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


// Fonction pour afficher le volet avec la skill bar
const skillIcons = document.querySelectorAll('.skill-icon');
const skillPanel = document.getElementById('skill-panel');
const skillTitle = document.getElementById('skill-title');
const skillBarContainer = document.getElementById('skill-bar-container');

skillIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const skill = this.getAttribute('data-skill');
        displaySkillPanel(skill);
    });
});

// Fonction pour afficher le volet et la skill bar correspondante
function displaySkillPanel(skill) {
    skillPanel.style.display = 'block';
    skillTitle.textContent = `Skill: ${capitalizeFirstLetter(skill)}`;

    // Vider le contenu précédent
    skillBarContainer.innerHTML = '';

    // Créer la skill bar pour l'icône cliquée
    const skillBar = document.createElement('div');
    skillBar.classList.add('skill-bar');
    skillBar.style.width = getSkillBarWidth(skill);
    skillBar.classList.add(`${skill}-bar`);
    
    skillBarContainer.appendChild(skillBar);
}

// Fonction pour déterminer la largeur de la skill bar selon le skill
function getSkillBarWidth(skill) {
    const skillLevels = {
        html: '80%',
        css: '75%',
        csharp: '60%',
        js: '70%',
        python: '65%',
        mysql: '50%',
        vs: '80%',
        vscode: '85%'
    };

    return skillLevels[skill] || '50%'; // Par défaut à 50% si le skill n'est pas dans la liste
}

// Fonction pour mettre en majuscule la première lettre du skill
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}