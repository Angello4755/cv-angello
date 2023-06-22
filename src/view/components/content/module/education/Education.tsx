import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import FlagIcon from "@mui/icons-material/Flag";
import { Education as IEducation } from "../../../../../data/language";

type Props = {
  education: IEducation;
};
const Education: FC<Props> = ({ education }) => {
  return (
    <Box
      marginRight={4}
      marginTop={2}
      display="flex"
      justifyItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography
        variant="subtitle1"
        align="justify"
        sx={{ fontWeight: "bold" }}
      >
        <FlagIcon fontSize="inherit" color="primary" />
        {education.title}
      </Typography>
      <Typography variant="subtitle2" align="justify">
        {education.localization}
      </Typography>
      <Typography variant="caption" align="justify" sx={{ fontWeight: "bold" }}>
        {education.initialDate} - {education.finalDate}
      </Typography>
    </Box>
  );
};

export default Education;
