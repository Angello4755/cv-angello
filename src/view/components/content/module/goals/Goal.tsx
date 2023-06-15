import React, { FC } from "react";
import { Typography } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";

type Props = {
  text: string;
  tecnologies: string;
};
const Goal: FC<Props> = ({ text, tecnologies }) => {
  return (
    <>
      <Typography variant="body2" align="justify">
        <FlagIcon fontSize="inherit" color="primary" />
        {text}
      </Typography>
      <Typography
        variant="caption"
        align="justify"
        sx={{ fontWeight: "bold" }}
        color="secondary"
      >
        {" "}
        {tecnologies}
      </Typography>
    </>
  );
};

export default Goal;
