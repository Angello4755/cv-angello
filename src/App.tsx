import React from "react";
import { MainLayout } from "./view/layout";
import "./styles.css";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./view/themes";
import { defaultTheme } from "./view/themes/default-theme";
import { ColorModeContext } from "./view/context/theme/ColorModeContext";
import { LanguageProvider } from "./view/context/language/LanguageProvider";

function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => (mode === "light" ? defaultTheme : darkTheme),
    [mode]
  );

  return (
    <LanguageProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <MainLayout />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </LanguageProvider>
  );
}

export default App;
