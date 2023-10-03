import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryColor: string;
      secondary: string;
      secondaryColor: string;
      secondaryColorHover: string;
      secondaryHover: string;
      white: string;
      textButtonHover: string;
    };
  }
}
