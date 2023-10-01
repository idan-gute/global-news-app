import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { IChildren } from "Types/types";
import GlobalStyles from "assets/styles/global-styles";


const StylesProvider = ({ children }:IChildren) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default StylesProvider;
