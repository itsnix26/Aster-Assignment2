const typeOne = [
  {
    text:
      "Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back high dose chemotherapy.",
  },
  {
    text:
      "Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marro marrow from a genetically (HLA) matched sibling donor.",
  },
  {
    text:
      "Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marro marrow from a genetically (HLA) matched donor obtained fro marrow registries in India and abroad.",
  },
  {
    text:
      "Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.",
  },
  {
    text:
      "Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genet (HLA) matched umbilical cord donor obtained from umbilica registries in India and abroad.",
  },
];

const type1 = document.querySelector(".type1");

window.addEventListener("load", function () {
  let displayQuestion = typeOne.map(function (item) {
    // console.log(item);
    return `
          <li>
            ${item.text}
          </li>
    `;
  });
  displayQuestion = displayQuestion.join("");
  type1.innerHTML = displayQuestion;
});

// --------------------------------------------------------------

const rowOne = [
  {
    id: 1,
    img: "./images/Height-check-icon.png",
    text:
      "Failure to thrive – not gaining weight and height as per the age norms",
  },
  {
    id: 1,
    img: "./images/Bed-icon.png",
    text: "Infections warranting multiple hospitalizations",
  },
  {
    id: 1,
    img: "./images/Fingers-down.png",
    text: "Requirement of intravenous antibiotics to clear infections",
  },
  {
    id: 1,
    img: "./images/Kidney-icon.png",
    text: "2 or more episodes of pneumonia",
  },
];

const row1 = document.querySelector(".row1");

window.addEventListener("load", function () {
  let displayQuestion = rowOne.map(function (item) {
    // console.log(item);
    return `
          <div class="col-sm-6 col-lg-3">
            <div class="card">
              <div class="card-height">
                <img src=${item.img} alt="Icon" />
              </div>
              <div class="card-body">
                <p class="card-text">${item.text}</p>
              </div>
            </div>
          </div>
    `;
  });
  displayQuestion = displayQuestion.join("");
  row1.innerHTML = displayQuestion;
});

// ----------------------------------------------------------------
const rowTwo = [
  {
    id: 1,
    img: "./images/Child-icon.png",
    text:
      "Family history of death of children at young age due to immune deficiency",
  },
  {
    id: 1,
    img: "./images/Diarrhea-icon.png",
    text: "Repeated episodes of diarrhea",
  },
  {
    id: 1,
    img: "./images/Nose-icon.png",
    text: "2 or more episodes of sinus infections within a year",
  },
  {
    id: 1,
    img: "./images/Ear-icon.png",
    text: "2 or more episodes of ear discharge",
  },
];

const row2 = document.querySelector(".row2");

window.addEventListener("load", function () {
  let displayQuestion = rowTwo.map(function (item) {
    // console.log(item);
    return `
          <div class="col-sm-6 col-lg-3">
            <div class="card">
              <div class="card-height">
                <img src=${item.img} alt="Icon" />
              </div>
              <div class="card-body">
                <p class="card-text">${item.text}</p>
              </div>
            </div>
          </div>
    `;
  });
  displayQuestion = displayQuestion.join("");
  row2.innerHTML = displayQuestion;
});
// ------------------------------------------------------------------------
const rowThree = [
  {
    id: 1,
    img: "./images/Fingers-up-icon.png",
    text: "Repeated skin infections",
  },
  {
    id: 1,
    img: "./images/Liver-icon.png",
    text: "Repeated abscess formation liver abscess, brain abscess",
  },
];

const row3 = document.querySelector(".row3");

window.addEventListener("load", function () {
  let displayQuestion = rowThree.map(function (item) {
    // console.log(item);
    return `
          <div class="col-sm-6 col-lg-3">
            <div class="card">
              <div class="card-height">
                <img src=${item.img} alt="Icon" />
              </div>
              <div class="card-body">
                <p class="card-text">${item.text}</p>
              </div>
            </div>
          </div>
    `;
  });
  displayQuestion = displayQuestion.join("");
  row3.innerHTML = displayQuestion;
});

const questions = [
  {
    id: 1,
    questionTitle:
      "What are the conditions that requireBone Marrow Transplant?",
    questionExplain_1:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
    questionExplain_2:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
  },
  {
    id: 2,
    questionTitle:
      "What are the Cancers that benefit from bone marrow transplant?",
    questionExplain_1:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
    questionExplain_2:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
  },
  {
    id: 3,
    questionTitle: "Do bone marrow failure syndromes require BMT",
    questionExplain_1:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
    questionExplain_2:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
  },
  {
    id: 4,
    questionTitle: "Why are Primary Immune Deficiency Diseases",
    questionExplain_1:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
    questionExplain_2:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
  },
  {
    id: 5,
    questionTitle: "What are the immune deficiencies that warrant BMT",
    questionExplain_1:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
    questionExplain_2:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
  },
  {
    id: 6,
    questionTitle: "What makes transplants at Aster CMI unique? ",
    questionExplain_1:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
    questionExplain_2:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
  },
  {
    id: 7,
    questionTitle:
      "Which are the hematological diesease that may benefit from bone marrow transplants",
    questionExplain_1:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
    questionExplain_2:
      "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.",
  },
];

const accordionSection = document.querySelector(".accordionSection");

window.addEventListener("load", function () {
  let displayQuestion = questions.map(function (item) {
    // console.log(item);
    return `
    <div class="accordion-item mb-3">
              <h2 class="accordion-header">
                <button
                  type="button"
                  class="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                 ${item.questionTitle}
                </button>
              </h2>
              <div
                class="accordion-collapse collapse"
                id="collapseOne"
                data-bs-parent="accordionSection"
              >
                <div class="accordion-body">
                  <ul>
                    <li>
                      ${item.questionExplain_1}
                    </li>
                    <li>
                      ${item.questionExplain_2}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    `;
  });
  displayQuestion = displayQuestion.join("");
  accordionSection.innerHTML = displayQuestion;
});

jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 2,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5500,
    smartSpeed: 350,
    nav: true,
    navText: [
      '<img class="prev-next-icon" src= "./images/Prev-arrow.png">',
      '<img src= "./images/Next-arrow.png">',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
});

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    loadEnquire();
  }
};

function loadEnquire() {
  let toggle = document.querySelector(".toggle");
  let enquire = document.querySelector(".enquire");

  toggle.addEventListener("click", function () {
    enquire.classList.toggle("active");
    toggle.classList.toggle("active");
  });
}
