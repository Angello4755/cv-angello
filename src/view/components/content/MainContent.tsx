import { Box, Divider } from "@mui/material";
import React from "react";
import Educations from "./module/Educations";
import Projects from "./module/Projects";
import WorkExperience from "./module/WorkExperience";

const MainContent = () => {
  return (
    <>
      <Box marginLeft={{ sm: "0%", xl: "20%" }}>
        <WorkExperience />
        <Educations />
        <Projects />
      </Box>
    </>
  );
};

export default MainContent;
