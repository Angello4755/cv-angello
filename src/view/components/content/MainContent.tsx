import { Box, Divider } from "@mui/material";
import React from "react";
import Educations from "./module/Educations";
import Projects from "./module/Projects";
import WorkExperience from "./module/WorkExperience";

const MainContent = () => {
  return (
    <>
      <Box
        width={{ sm: "100%", xl: "79%" }}
        marginLeft={{ sm: "0%", xl: "21%" }}
      >
        <WorkExperience />
        <Educations />
        <Projects />
      </Box>
    </>
  );
};

export default MainContent;
