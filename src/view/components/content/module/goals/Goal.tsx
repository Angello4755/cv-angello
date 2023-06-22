import React, { FC } from "react";
import { Chip, Typography } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import { TECNOLOGIE } from "../../../../../data/workExperence";
import FaceIcon from "@mui/icons-material/Face";

type Props = {
  text: string;
  tecnologies: TECNOLOGIE[];
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
        {tecnologies.map((chip) => (
          <Chip
            label={chip}
            color="success"
            size="small"
            variant="outlined"
            sx={{
              marginRight: 0.5,
            }}
          />
        ))}
      </Typography>
    </>
  );
};

export default Goal;
