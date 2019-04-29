window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  console.log("Load SVG");

  fetch("timeline-mockup2-01.svg")
    .then(response => response.text())
    .then(svgdata => {
      console.log("The svg is loaded");

      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);

      fitRectangle("#philosopher .HTML_placeholder", "#movie_1");
      fitRectangle("#chamber .HTML_placeholder", "#movie_2");
      fitRectangle("#prisoner .HTML_placeholder", "#movie_3");
    });
}

function fitRectangle(svgElement, htmlElement) {
  svgElement = document.querySelector(svgElement);
  htmlElement = document.querySelector(htmlElement);

  htmlElement.style.left = svgElement.getAttribute("x") + "px";
  htmlElement.style.top = svgElement.getAttribute("y") + "px";
  htmlElement.style.width = svgElement.getAttribute("width") + "px";
  htmlElement.style.height = svgElement.getAttribute("height") + "px";
}
