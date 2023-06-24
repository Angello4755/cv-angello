import { useContext } from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { LanguageContext } from "../../../context/language/LanguageContex";
import WorkIcon from "@mui/icons-material/Work";
import Company from "./company/Company";

const WorkExperience = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <Box
      marginLeft={2}
      marginBottom={2}
      width="95%"
      borderRadius={2}
      display="flex"
      alignContent="center"
      alignItems="start"
      boxShadow={2}
      padding={2}
      flexDirection="column"
    >
      <Box borderRadius={2} marginRight={2} display="flex" flexDirection="row">
        <WorkIcon color="primary" />
        <Typography variant="h6">
          {currentLanguage.general.workExperience}
        </Typography>
      </Box>

      <Box width="100%">
        {currentLanguage.workExperience.map((company) => (
          <Company dataCompany={company} />
        ))}
      </Box>
    </Box>
  );
};

export default WorkExperience;
