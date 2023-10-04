import { ButtonProps } from "@mui/material";
import { StyledButton } from "./styles";
import ArrowRight from "assets/icons/ArrowButton";
import { buttonVariants } from "assets/styles/types";


export interface IButton extends ButtonProps {
  text: string;
  buttontype: buttonVariants.PRIMARY | buttonVariants.SECONDARY | buttonVariants.TEXT;
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
