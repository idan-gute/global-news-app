import { ButtonProps } from "@mui/material";
import { StyledButton } from "./button.styled";
import ArrowRight from "assets/icons/ArrowButton";

export interface IButton extends ButtonProps {
  text: string;
  buttontype: "primary" | "secondary" | "text";
  icon?: boolean;
}

const Button = ({ text, icon, ...rest }: IButton) => {
  return (
    <StyledButton endIcon={icon && <ArrowRight />} {...rest}>
      {text}
    </StyledButton>
  );
};

export default Button;
