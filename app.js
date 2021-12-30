const data = {
  Titles: [
    "Introduction",
    "Formations",
    "Expériences"
  ],
  Introduction: {
    title: "SÉRIEUX, RIGOUREUX ET AMBITIEUX",
    description:
      "Je suis jeune et passionné d'informatique. Actuellement en reconversion professionnel, j'ai décidé de m'orienter vers le domaine de la technologie, un domaine qui a toujours suscité mon attention. Je suis une formation professionnelle afin d'acquérir des compétences nécessaires à la réussite de ma reconversion.",
  },
  Formations: [
    {
      school: "Ecole Poly3D",
      years: "2015-2016",
      description: "Ecole de Conception de Jeux Vidéos",
    },
    {
      school: "Université de Polynésie Française",
      years: "2019-2020 ",
      description: "Diplôme d'accès aux études universitaires",
    },
    {
      school: "AFPA de Brest",
      years: "2021-2022",
      description: "Dev Web & Web mobile",
    },
  ],
  Experiences: [
    {
      entreprise: "ASSISTANCE AMBULANCE | STAGE DEV WEB",
      description:
        "Découverte du métier de développeur web, création d' un site web pour la gestion des transports. \nMise en place du frontend & du backend.",
      years: "2020",
    },
    {
      entreprise: "BE LOCAL | GERANT GRAPHISTE COMMERCIAL",
      description:
        "Création des graphiques pour les productions des textiles. \nÉdition des photos éditoriales les publications sur les réseaux sociaux.Organisation des commandes et des livraisons.",
      years: "2020-2016",
    },
    {
      entreprise: "VAIHEI ASSISTANCE | GESTION DE FACTURATION",
      description:
        "Mise en place et gestion d'un système semi-automatisé de facturation.Chargé de mettre à jour les données mensuel essentiel pour le logiciel.",
      years: "2016",
    },
  ],
};
const divout = document.getElementById("content");
const dostout = document.getElementById("dotsOut");
const elementsCreated = [];
// loop in the json
Object.keys(data).forEach((keys) => {
  if (keys == "Titles") {
    return console.log("titles");
  }
  const section = document.createElement("div");
  section.classList.add("section");
  section.classList.add("mySlides");
  section.classList.add("fade");
  intro(keys, section);
  formation(keys, section);
  experience(keys, section);
  //   push in the array
  elementsCreated.push(section);
});
// insertion des dots
dots(elementsCreated, dostout);
//loop trough "elementsCreated" to insert dynamically the contents in the DOM
elementsCreated.forEach((e) => {
  divout.appendChild(e);
});

// FUNCTIONS
function intro(keys, section) {
  if (keys == "Introduction") {
    const sectionTitle = document.createElement("h2");
    const title = document.createElement("h3");
    const desc = document.createElement("p");
    sectionTitle.textContent = data.Titles[0];
    section.appendChild(sectionTitle);
    title.textContent = data.Introduction.title;
    desc.textContent = data.Introduction.description;
    section.appendChild(title);
    section.appendChild(desc);
  }
}
function formation(keys, section) {
  if (keys == "Formations") {
    // Titre de la section
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = data.Titles[1];
    section.appendChild(sectionTitle);
    //loop trough data
    data.Formations.forEach(e => {
    const title = document.createElement("h3");
    const years = document.createElement("h4");
    const desc = document.createElement("p");
    const titleYears = document.createElement("div");
    titleYears.classList.add("head");
    years.classList.add("accent-text")
      title.textContent = e.school;
      years.textContent = e.years;
      desc.textContent = e.description;
      titleYears.appendChild(title);
      titleYears.appendChild(years);
      section.appendChild(titleYears);
      section.appendChild(desc);
    });
  }
}
function experience(keys, section) {
  if (keys == "Experiences") {
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = data.Titles[2];
    section.appendChild(sectionTitle);
    data.Experiences.forEach(e => {
    const title = document.createElement("h3");
    const years = document.createElement("h4");
    const desc = document.createElement("p");
    const titleYears = document.createElement("div");
    titleYears.classList.add("head");
    years.classList.add("accent-text")
      title.textContent = e.entreprise;
      console.log(title);
      years.textContent = e.years;
      desc.textContent = e.description;
      titleYears.appendChild(title);
      titleYears.appendChild(years);
      section.appendChild(titleYears);
      section.appendChild(desc);
    });
  }
}
function dots(sections, divout) {
  const dotsDiv = document.createElement("div");
  // dotsDiv.classList.add("tar");
  sections.forEach((e,i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    // event listener on click
    dot.addEventListener("click",(e)=>{
      currentSlide(i+1);
    })
    dotsDiv.appendChild(dot);
  });
  divout.appendChild(dotsDiv);
}

// script slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const bg = document.getElementsByClassName("bg");
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    bg[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  bg[slideIndex - 1].style.display = "block";
}
