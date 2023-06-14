import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import Language from "../language/Language";
import ModeTheme from "../modeTheme/ModeTheme";
const MainNavbar = () => {
  return (
    <AppBar
      sx={{
        marginBottom: 2,
        boxShadow: "none",
        background: "primary",
        backgroundSize: "cover",
        height: "10%",
      }}
      position="static"
    >
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="black"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <ModeTheme />
          <Language />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default MainNavbar;
