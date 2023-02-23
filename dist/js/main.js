import * as util from "./utils.js";

const initApp = () => {
  //localStorage.clear();
  if (!localStorage.getItem("mode")) {
    initAppWithEmptyLocalStorage();
  }

  applyColorsOnScreen();

  changeAppMode();
  changeColorValues();
};

const initAppWithEmptyLocalStorage = () => {
  localStorage.setItem("mode", "color_flipper");
  setLocalStorageColors(util.generateRandomColor);
};

const setLocalStorageColors = (generateNextValue) => {
  localStorage.setItem("current_color", generateNextValue());
  localStorage.setItem("next_color", generateNextValue());
};

const applyColorsOnScreen = () => {
  const mainElement = document.getElementById("main");
  mainElement.style.backgroundColor = `${localStorage.getItem(
    "current_color"
  )}`;

  changeSectionContent(
    ".current-color__value",
    localStorage.getItem("current_color")
  );
  changeSectionContent(
    ".next-color__value",
    localStorage.getItem("next_color")
  );
};

const changeSectionContent = (elementClass, color) => {
  const element = document.querySelector(elementClass);
  element.textContent = color;
  element.style.color = color;
};

const changeAppMode = () => {
  const modeButtons = document.getElementById("nav");
  modeButtons.addEventListener("click", (event) => {
    if (event.target.id !== localStorage.getItem("mode")) {
      localStorage.setItem("mode", event.target.id);
      setColorsInLocalStorage();
      applyColorsOnScreen();
    }
  });
};

const setColorsInLocalStorage = () => {
  if (localStorage.getItem("mode") === "color_flipper") {
    setLocalStorageColors(util.generateRandomColor);
  } else {
    setLocalStorageColors(util.generateRandomHexColorCode);
  }
};

const changeColorValues = () => {
  const changeBtn = document.getElementById("change-mode");
  changeBtn.addEventListener("click", () => {
    if (localStorage.getItem("mode") === "color_flipper") {
      changeColorValuesInLocalStorage(util.generateRandomColor);
      applyColorsOnScreen();
    } else {
      changeColorValuesInLocalStorage(util.generateRandomHexColorCode);
      applyColorsOnScreen();
    }
  });
};

const changeColorValuesInLocalStorage = (generateNextValue) => {
  localStorage.setItem("current_color", localStorage.getItem("next_color"));
  localStorage.setItem("next_color", generateNextValue());
};

document.addEventListener("DOMContentLoaded", initApp);
