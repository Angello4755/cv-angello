import { Box, Divider, useTheme } from "@mui/material";
import Profile from "./Profile";
import Languages from "./Languages";
import TechnicalSkills from "./TechnicalSkills";
import TransversalSkills from "./TransversalSkills";

const MainMenu = () => {
  const theme = useTheme();

  const background = theme.palette.background.paper;

  return (
    <Box
      bgcolor={background}
      marginLeft={2}
      width="20%"
      borderRadius={"20px"}
      display={{
        sm: "none",
        xl: "block",
        xs: "none",
        lg: "block",
      }}
      position="fixed"
      flexGrow={1}
      height="100%"
      boxShadow={2}
      marginTop={2}
      marginBottom={10}
    >
      <Box height="100%" margin={2}>
        <Profile />
        <Divider light />
        <Languages />
        <Divider light />
        <TechnicalSkills />
        <Divider light />
        <TransversalSkills />
      </Box>
    </Box>
  );
};

export default MainMenu;
