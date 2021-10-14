const sections = [
  "dom-navigation",
  "styles-tab",
  "computed-tab",
  "classes",
  "pseudo-classes",
  "contrast",
  "coverage",
  "copying-styles",
  "screenshots",
  "animations",
];

const root = document.querySelector(":root");

const primaryColors = ["#f00", "#0f0", "#00f", "#f0f", "#0ff", "#ff0"];
const secundaryColors = [
  "#ffdfdf",
  "#dfffdf",
  "#dfdfff",
  "#ffdfff",
  "#dfffff",
  "#ffffdf",
];
const tertiaryColors = ["#100", "#010", "#001", "#101", "#011", "#110"];

window.onload = onInit();

function onInit() {
  setColors();
  setSection();
  checkPreviousButton();
  checkNextButton();
}

function showPreviousSection() {
  hideSection(getCurrentSection());
  showSection(getPreviousSection());
  checkPreviousButton();
  checkNextButton();
  saveSection();
}

function showNextSection() {
  hideSection(getCurrentSection());
  showSection(getNextSection());
  checkPreviousButton();
  checkNextButton();
  saveSection();
}

function getCurrentSection() {
  return document.getElementById(sections[currentSectionIndex]);
}

function getNextSection() {
  currentSectionIndex += 1;
  return getCurrentSection();
}

function getPreviousSection() {
  currentSectionIndex -= 1;
  return getCurrentSection();
}

function showSection(section) {
  section.classList.remove("hidden");
}

function hideSection(section) {
  section.classList.add("hidden");
}

function checkPreviousButton() {
  const previousBtn = document.getElementById("previous");
  previousBtn.disabled = currentSectionIndex === 0;
}

function checkNextButton() {
  const nextBtn = document.getElementById("next");
  nextBtn.disabled = currentSectionIndex === sections.length - 1;
}

function saveSection() {
  window.localStorage.setItem("currentSection", currentSectionIndex);
}

function setSection() {
  currentSectionIndex =
    Number(window.localStorage.getItem("currentSection")) || 0;
  showSection(getCurrentSection());
}

function setColors() {
  changeColors(window.localStorage.getItem("color") || 0);
}

function changeColors(i) {
  root.style.setProperty("--primary-color", primaryColors[i]);
  root.style.setProperty("--secundary-color", secundaryColors[i]);
  root.style.setProperty("--tertiary-color", tertiaryColors[i]);
  saveColors(i);
}

function saveColors(i) {
  window.localStorage.setItem("color", i);
}
