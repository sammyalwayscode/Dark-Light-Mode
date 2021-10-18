import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${({ theme }) =>
    theme.myTheme === "dark" ? "black" : "white"};

  color: ${({ theme }) => (theme.myTheme === "dark" ? "white" : "black")}
}
`;

function App() {
  const storeThemeChoice = () => {
    const saveTheme = storage.getItem("toggle");
    return saveTheme ? JSON.parse(saveTheme) : { myTheme: "light" };
  };

  const [toogle, setToogle] = useState(storeThemeChoice);
  useEffect(() => {
    storage.setItem("toggle", JSON.stringify(toogle));
  }, [toogle]);
  return (
    <ThemeProvider theme={toogle}>
      <GlobalStyle />
      <div className="App">
        <button
          onClick={() => {
            setToogle(
              toogle.myTheme === "dark"
                ? { myTheme: "light" }
                : { myTheme: "dark" }
            );
          }}
        >
          {" "}
          Click{" "}
        </button>
        <h1 color="Green">Hello</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
