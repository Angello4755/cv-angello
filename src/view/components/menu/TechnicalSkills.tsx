import { Box, Typography, Chip, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { TECHNICALSKILLS } from "../../../data/workExperence";
import { LanguageContext } from "../../context/language/LanguageContex";

const TechnicalSkills = () => {
  const { palette } = useTheme();
  const color = palette.text.primary;
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <Box marginTop={2}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} color={color}>
        {currentLanguage.general.technicalSkills}:
      </Typography>
      <div>
        {Object.values(TECHNICALSKILLS).map((tec, index) => (
          <Chip
            key={index}
            label={tec}
            color="primary"
            size="small"
            variant="outlined"
            sx={{ marginRight: 0.5, marginBottom: 0.5 }}
          />
        ))}
      </div>
    </Box>
  );
};

export default TechnicalSkills;
