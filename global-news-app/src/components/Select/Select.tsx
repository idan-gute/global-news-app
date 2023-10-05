import { FormControl, Box } from "@mui/material";
import MUISelect, { SelectChangeEvent } from "@mui/material/Select";
import { SelectOptions } from "Types";
import SelectArrow from "assets/icons/SelectArrow";
import { MenuProps, StyledMenuItem, styledFormControl } from "./styles";

interface ISelect {
  label: string;
  value: string;
  handleChange: (value: string) => void;
  options: SelectOptions[];
}

const Select = ({ label, value, handleChange, options }: ISelect) => {
  return (
    <Box>
      <FormControl sx={styledFormControl}>
        <MUISelect
          MenuProps={MenuProps}
          IconComponent={(props) => <SelectArrow {...props} />}
          value={value}
          onChange={(event: SelectChangeEvent<string>) => {
            handleChange(event.target.value);
          }}
          displayEmpty
          renderValue={(value) => (value ? value : <p>{label}</p>)}
        >
            {options?.map(({ value }) => (
              <StyledMenuItem key={value} value={value}>
                {value}
              </StyledMenuItem>
            ))}
        </MUISelect>
      </FormControl>
    </Box>
  );
};

export default Select;
