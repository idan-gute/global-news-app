import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      bodyBackground:string;
      primary: {
        main: string;
        hover: string;
        text: string;
      };
      secondary: {
        main: string;
        hover: string;
        text: string;
        textColorHover: string;
      };
      textButton: {
        textColorHover: string;
      };
      select: {
        menuItem:string,
        dropDownBoxShadow:string,
        scrollbarThumbColor:string,
      },
    };
    spacing: {
      0: string;
      1: string;
      2: string;
      3: string;
    };
  }
}
