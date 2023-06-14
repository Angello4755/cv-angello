import { Box, Typography } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";

const Skills = () => {
  return (
    <Box marginTop={2}>
      {" "}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        Skills
      </Typography>
      <div>
        <CodeIcon style={{ fontSize: "3rem" }} />
        <Typography variant="body1">JavaScript</Typography>
      </div>
    </Box>
  );
};

export default Skills;
