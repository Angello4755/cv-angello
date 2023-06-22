import { Box, Typography, Chip } from "@mui/material";
import React, { useContext } from "react";
import CodeIcon from "@mui/icons-material/Code";
import { TECNOLOGIE } from "../../../data/workExperence";
import { LanguageContext } from "../../context/language/LanguageContex";

const Skills = () => {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <Box marginTop={2}>
      {" "}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        {currentLanguage.general.skills}:
      </Typography>
      <div>
        {Object.values(TECNOLOGIE).map((tec) => (
          <Chip
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

export default Skills;
