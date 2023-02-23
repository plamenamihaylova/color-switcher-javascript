const FLIPPER_COLORS = [
  "#F7C8E0",
  "#DFFFD8",
  "#B4E4FF",
  "#95BDFF",
  "#B9F3E4",
  "#EA8FEA",
  "#FFAACF",
  "#F6E6C2",
  "#B5F1CC",
  "#E5FDD1",
  "#C9F4AA",
  "#FCC2FC",
  "#6096B4",
  "#93BFCF",
  "#BDCDD6",
  "#EEE9DA",
  "#AAE3E2",
  "#D9ACF5",
  "#FFCEFE",
  "#FDEBED",
];

const HEX_REF = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

export const generateRandomColor = () => {
  return FLIPPER_COLORS[Math.floor(Math.random() * FLIPPER_COLORS.length)];
};

export const generateRandomHexColorCode = () => {
  const result = [];

  for (let i = 0; i < 6; i++) {
    result.push(HEX_REF[Math.floor(Math.random() * 16)]);
  }

  return "#" + result.join("");
};
