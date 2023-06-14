import React, { useContext } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { LanguageContext } from "../../../context/language/LanguageContex";
import WorkIcon from "@mui/icons-material/Work";

const WorkExperience = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <Box
      marginLeft={2}
      width="77%"
      borderRadius={"20px"}
      display={{ sm: "none", xl: "flex", backgroundColor: "white" }}
      alignContent="center"
      alignItems="center"
      boxShadow={2}
      padding={2}
    >
      <Box borderRadius={2} marginRight={2}>
        <WorkIcon color="primary" />
      </Box>
      <Typography variant="h6">
        {currentLanguage.workExperience.title}
      </Typography>
      <Divider light />
    </Box>
  );
};

export default WorkExperience;
