import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/assets/styles/theme";
import { GlobalStyles } from "../src/assets/styles/global-styles";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {theme},
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
