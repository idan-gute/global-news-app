import { DefaultTheme } from "styled-components";
const colors = {
  white: "#FFFFFF",
  primary: {
    main: "#0058B9",
    hover: "#3279c7",
    text: "#3279c7",
  },
  secondary: {
    main: "#D9DBE9",
    hover: "#e1e2ed",
    text: "#5A5A89",
    textColorHover: "#7b7ba1",
  },
  textButton: {
    textColorHover: "#d9dbe9",
  },
};

const spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "16px",
};

export const theme: DefaultTheme = {
  colors,
  spacing,
};
