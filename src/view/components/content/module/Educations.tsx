import { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { LanguageContext } from "../../../context/language/LanguageContex";
import SchoolIcon from "@mui/icons-material/School";
import Education from "./education/Education";

const Educations = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <Box
      marginBottom={2}
      marginLeft={2}
      width="95%"
      borderRadius={2}
      display={{ xl: "flex", backgroundColor: "white" }}
      alignContent="center"
      alignItems="start"
      boxShadow={2}
      padding={2}
      flexDirection="column"
    >
      <Box borderRadius={2} marginRight={2} display="flex" flexDirection="row">
        <SchoolIcon color="primary" />
        <Typography variant="h6">
          {currentLanguage.general.education}
        </Typography>
      </Box>
      <Grid container spacing={0}>
        {currentLanguage.educations.map((education) => (
          <Grid item xs={12} sm={6} lg={6}>
            <Education education={education} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Educations;
