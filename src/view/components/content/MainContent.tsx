import { Box, Divider } from "@mui/material";
import React from "react";
import Educations from "./module/Educations";
import Projects from "./module/Projects";
import WorkExperience from "./module/WorkExperience";

const MainContent = () => {
  return (
    <>
      <Box
        width={{ xs: "100%", sm: "100%", xl: "79%", lg: "79%" }}
        marginLeft={{ xs: "0%", sm: "0%", xl: "21%", lg: "21%" }}
      >
        <WorkExperience />
        <Educations />
        <Projects />
      </Box>
    </>
  );
};

export default MainContent;
