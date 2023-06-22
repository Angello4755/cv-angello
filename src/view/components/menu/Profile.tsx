import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import photo from "../../../assets/photoAngello.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useContext } from "react";
import { LanguageContext } from "../../context/language/LanguageContex";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import FlagIcon from "@mui/icons-material/Flag";

const Profile = () => {
  const { palette } = useTheme();
  const color = palette.text.primary;

  const { currentLanguage } = useContext(LanguageContext);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      sx={{ marginTop: 6, marginLeft: 4, marginRight: 4 }}
    >
      <Typography variant="h5" align="center" color={color}>
        {"Angello Ferley Rios Arredondo"}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color={color}
        style={{ fontWeight: "bold" }}
      >
        {currentLanguage.general.jobTitle}
      </Typography>
      <Box
        display="flex"
        flexDirection={"row"}
        alignItems="center"
        sx={{ margin: 2 }}
        color={color}
      >
        <IconButton
          href="https://api.whatsapp.com/send?phone=573215955305"
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/angello-arredondo-44233762/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/angello1302"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="mailto:angellorios1302@gmail.com"
          target="_blank"
          rel="noopener"
          aria-label="Gmail"
        >
          <MailIcon />
        </IconButton>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        width="70%"
        alignContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold" }}
          color={color}
        >
          {currentLanguage.general.LabelNationality}:
        </Typography>
        <Typography variant="subtitle2" color={color}>
          {currentLanguage.general.nationality}
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
