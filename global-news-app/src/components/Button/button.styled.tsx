import MUIButton from "@mui/material/Button";
import styled, { DefaultTheme } from "styled-components";

const buttonVariants = (theme: DefaultTheme) => ({
  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    gap: "8px",
    "&:hover": {
      backgroundColor: theme.colors.primaryHover,
      color: theme.colors.white,
    },
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.secondaryColor,
    border: "none",
    "&:hover": {
      color: theme.colors.secondaryColorHover,
      backgroundColor: theme.colors.secondaryHover,
      border: "none",
    },
  },
  text: {
    color: theme.colors.secondaryColor,
    "&:hover": {
      background: theme.colors.textButtonHover,
    },
  },
});

export const StyledButton = styled(MUIButton)<{
  buttontype: keyof ReturnType<typeof buttonVariants>;
}>`
  && {
    height: 36px;
    padding: 0px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    & .MuiButton-endIcon {
      margin: 0px;
    }

    ${({ buttontype, theme }) => buttonVariants(theme)[buttontype]}
  }
`;
