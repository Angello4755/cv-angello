import {
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useContext } from "react";
import Goal from "../goals/Goal";
import BusinessIcon from "@mui/icons-material/Business";
import { DataCompany } from "../../../../../data/language";
import { LanguageContext } from "../../../../context/language/LanguageContex";

type Props = {
  dataCompany: DataCompany;
};

const Company: FC<Props> = ({ dataCompany }) => {
  const { currentLanguage } = useContext(LanguageContext);
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={2}
      borderRadius={1}
      width="98%"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} lg={2} justifyContent="center">
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold" }}
            align="center"
          >
            {dataCompany.post}
          </Typography>
          <Typography variant="subtitle2" align="center">
            {dataCompany.initialDate} - {dataCompany.finalDate}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} lg={10} width="100%">
          <Box display="flex" flexDirection="row">
            <Tooltip title={dataCompany.company}>
              <IconButton
                href={dataCompany.pageWeb}
                target="_blank"
                rel="noopener"
                aria-label={dataCompany.company}
              >
                <Box marginRight={2}>
                  <BusinessIcon color="primary" />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", textDecoration: "underline" }}
                  color="primary"
                >
                  {dataCompany.company}
                </Typography>
              </IconButton>
            </Tooltip>
          </Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {currentLanguage.general.goals}
          </Typography>
          <List>
            <Grid container spacing={2}>
              {dataCompany.goals.map((goal, index) => (
                <Grid item xs={12} sm={6} lg={6}>
                  <Goal
                    text={goal.description}
                    tecnologies={goal.technologies}
                  />
                </Grid>
              ))}
            </Grid>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Company;
