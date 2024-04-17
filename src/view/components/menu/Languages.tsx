import React from "react";
import { Box, Typography, LinearProgress, useTheme } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../context/language/LanguageContex";
import Language from "./Language";

const Languages = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const { palette } = useTheme();
  const color = palette.text.primary;

  return (
    <Box marginTop={2}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} color={color}>
        {currentLanguage.general.languages}
      </Typography>
      <Language
        languageText={currentLanguage.laguages[1].value}
        percentage={75}
        nativeText={currentLanguage.general.native}
      />
      <Language
        languageText={currentLanguage.laguages[2].value}
        percentage={65}
        nativeText={currentLanguage.general.native}
      />

      <Language
        languageText={currentLanguage.laguages[0].value}
        percentage={100}
        nativeText={currentLanguage.general.native}
      />
    </Box>
  );
};

export default Languages;
