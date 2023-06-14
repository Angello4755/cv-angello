import React, { FC } from "react";
import { Typography, LinearProgress, useTheme } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  languageText: string;
  percentage: number;
  nativeText: string;
};
const Language: FC<Props> = ({ languageText, percentage, nativeText }) => {
  const { palette } = useTheme();
  const color = palette.text.primary;
  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }} color={color}>
        {languageText}
      </Typography>
      <Box display="flex" justifyContent="space-between" flexDirection="row">
        {percentage === 100 ? (
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold" }}
            color={color}
          >
            {nativeText}
          </Typography>
        ) : (
          <>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold" }}
              color={color}
            >
              A1
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold" }}
              color={color}
            >
              A2
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold" }}
              color={color}
            >
              B1
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold" }}
              color={color}
            >
              B2
            </Typography>
          </>
        )}
      </Box>
      <LinearProgress variant="determinate" value={percentage} />
    </Box>
  );
};

export default Language;
