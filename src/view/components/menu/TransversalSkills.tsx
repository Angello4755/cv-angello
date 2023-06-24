import { Box, Typography, Chip, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { TRANSVERSALSKILLS } from "../../../data/workExperence";
import { LanguageContext } from "../../context/language/LanguageContex";

const TransversalSkills = () => {
  const { palette } = useTheme();
  const color = palette.text.primary;
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <Box marginTop={2}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} color={color}>
        {currentLanguage.general.transversalSkills}:
      </Typography>
      <div>
        {Object.values(TRANSVERSALSKILLS).map((tec) => (
          <Chip
            label={tec}
            color="default"
            size="small"
            variant="outlined"
            sx={{ marginRight: 0.5, marginBottom: 0.5 }}
          />
        ))}
      </div>
    </Box>
  );
};

export default TransversalSkills;
