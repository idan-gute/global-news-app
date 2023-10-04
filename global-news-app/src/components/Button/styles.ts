import MUIButton from "@mui/material/Button";
import { theme } from "assets/styles/theme";
import styled, { DefaultTheme } from "styled-components";

const buttonVariants = (theme: DefaultTheme) => ({
  primary: {
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.white,
    gap: theme.spacing[2],
    "&:hover": {
      backgroundColor: theme.colors.primary.hover,
      color: theme.colors.white,
    },
  },
  secondary: {
    backgroundColor: theme.colors.secondary.main,
    color: theme.colors.secondary.text,
    border: "none",
    "&:hover": {
      color: theme.colors.secondary.textColorHover,
      backgroundColor: theme.colors.secondary.main,
      border: "none",
    },
  },
  text: {
    color: theme.colors.secondary.text,
    "&:hover": {
      background: theme.colors.textButton.textColorHover,
    },
  },
});

export const StyledButton = styled(MUIButton)<{
  buttontype: keyof ReturnType<typeof buttonVariants>
}>`
  && {
    height: 36px;
    padding: ${theme.spacing[0]} ${theme.spacing[3]};
    border-radius: 20px;
    font-size: .875rem;
    font-style: normal;
    font-weight: 500;
    letter-spacing: .0156rem;
    text-transform: uppercase;
    & .MuiButton-endIcon {
      margin: ${theme.spacing[0]};
    }

    ${({ buttontype, theme }) => buttonVariants(theme)[buttontype]}
  }
`;