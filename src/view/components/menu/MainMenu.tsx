import React from "react";
import { Box, Button, Divider, useTheme } from "@mui/material";
import Profile from "./Profile";
import ModeTheme from "../modeTheme/ModeTheme";
import { useContext } from "react";
import { LanguageContext } from "../../context/language/LanguageContex";
import Languages from "./Languages";
import Skills from "./Skills";

const MainMenu = () => {
  const theme = useTheme();

  const { changeLanguage } = useContext(LanguageContext);

  console.log(theme);

  const background = theme.palette.background.paper;

  return (
    <Box
      bgcolor={background}
      marginLeft={2}
      width="19%"
      borderRadius={"20px"}
      display={{ sm: "none", xl: "block" }}
      position="fixed"
      flexGrow={1}
      height="100%"
      boxShadow={2}
      marginTop={6}
      marginBottom={10}
    >
      <Box height="100%" margin={2}>
        <Profile />
        <Divider light />
        <Languages />
        <Divider light />
        <Skills />
      </Box>
    </Box>
  );
};

export default MainMenu;
