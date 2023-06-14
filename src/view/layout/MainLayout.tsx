import React from "react";
import MainMenu from "../components/menu/MainMenu";
import MainContent from "../components/content/MainContent";
import MainNavbar from "../components/navbar/MainNavbar";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <MainMenu />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "100vh",
        }}
      >
        <MainNavbar />
        <MainContent />
      </Box>
    </>
  );
};

export default MainLayout;
