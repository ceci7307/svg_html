window.addEventListener("DOMContentLoaded", loadSVG);
window.addEventListener("resize", calSize);

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
