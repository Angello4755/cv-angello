import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { LanguageContext } from "../../../context/language/LanguageContex";
import WorkIcon from "@mui/icons-material/Work";
import Project from "./projects/Project";

const Projects = () => {
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
        <WorkIcon color="primary" />
        <Typography variant="h6">{currentLanguage.general.projects}</Typography>
      </Box>
      <Box display="flex" flexDirection="column" width="100%">
        {currentLanguage.projects.map((project) => (
          <Project project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
