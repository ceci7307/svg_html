window.addEventListener("DOMContentLoaded", loadSVG);
window.addEventListener("DOMContentLoaded", loadJson);
window.addEventListener("resize", calSize);
let movieTemplate = document.querySelector("#movie_template");

// LOAD JSON
function loadJson() {
  fetch("data.json")
    .then(response => response.json())
    .then(jsonData => {
      console.log("The jsonData is loaded");
      console.log(jsonData);
      //LOOP
      jsonData.forEach(dataen => {
        console.log(dataen);
        // SET DESTINATIONEN SÅ DATA KOMMER IND I RETTE DIV
        const dest = document.querySelector(
          `[data-svgplaceholder=${dataen.id}]`
        );
        console.log(dest);

        // VIS OG KLON PÅ NY VIS
        let klon = movieTemplate.cloneNode(true).content;

        const dataFields = klon.querySelectorAll("[data-field]");
        dataFields.forEach(element => {
          /* console.log(element); */
          const prop = element.dataset.field;
          /* console.log(prop); */
          element.textContent = dataen[prop];
          element.src = dataen[prop];
        });

        // VIS OG KLON PÅ GAMMEL VIS
        /* 
        klon.querySelector("h1").textContent = dataen.title;
        klon.querySelector("[data-field='year']").textContent = dataen.year;
        klon.querySelector("[data-field='director']").textContent =
          dataen.director;
        klon.querySelector("img").src = dataen.image;
 */

        // PUSH TIL DESTINATIONEN. SOM ALTID
        dest.appendChild(klon);
      });
    });
}

// LOAD SVG
function loadSVG() {
  console.log("Load SVG");

  fetch("timeline-mockup2-01.svg")
    .then(response => response.text())
    .then(svgdata => {
      console.log("The svg is loaded");

      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);

      calSize();
    });
}
// UDREGN STØRRELSERNE OG SET HTML TEKSTEN SAMME STØRRELSE SOM SVG BOKSEN/ELEMENTET
function calSize() {
  fitRectangle("#philosopher .HTML_placeholder", "#movie_1");
  fitRectangle("#chamber .HTML_placeholder", "#movie_2");
  fitRectangle("#prisoner .HTML_placeholder", "#movie_3");
}

function fitRectangle(svgElement, htmlElement) {
  svgElement = document.querySelector(svgElement);
  htmlElement = document.querySelector(htmlElement);
  const rect = svgElement.getBoundingClientRect();

  htmlElement.style.left = rect.x + "px";
  htmlElement.style.top = rect.y + "px";
  htmlElement.style.width = rect.width + "px";
  htmlElement.style.height = rect.height + "px";
}
