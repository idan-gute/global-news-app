import { MenuItem } from "@mui/material";
import { theme } from "assets/styles/theme";
import styled from "styled-components";

const SelectWidth = 190;

export const styledFormControl = {
  borderRadius: "10px",
  background: `${theme.colors.white}`,
  ".MuiOutlinedInput-notchedOutline": { border: "none" },
  padding: "15px",
  minWidth: SelectWidth,
  ".MuiSelect-outlined": {
    background: `${theme.colors.white}`,
    padding: `${theme.spacing[0]}`,
  },
};

export const MenuProps = {
  MenuListProps: {
    sx: {
      padding: "6px 0px",
      maxHeight: 126,
      overflowY: "overlay",
      "&::-webkit-scrollbar": {
        width: "3px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: theme.colors.select.scrollbarThumbColor,
        borderRadius: "6px",
      },
    },
  },
  PaperProps: {
    sx: {
      marginTop: "20px",
      borderRadius: "10px",
      width: SelectWidth,
      boxShadow: theme.colors.select.dropDownBoxShadow,
    },
  },
};

export const StyledMenuItem = styled(MenuItem)`
  && {
    min-height: 28px;
    padding: 0 24px;
    &.MuiMenuItem-root {
      &.Mui-selected {
        background: ${theme.colors.select.menuItem};
      }
    }
  }
`;
