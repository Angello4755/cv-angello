import React, { useContext } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Box } from "@mui/system";
import { LanguageContext } from "../../context/language/LanguageContex";

const Language = () => {
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  const [language, setLanguage] = React.useState(currentLanguage.key);
  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setLanguage(value);
    changeLanguage(value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {currentLanguage.general.language}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={handleChange}
        >
          {currentLanguage.laguages.map((language) => (
            <MenuItem value={language.key}>{language.value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Language;
