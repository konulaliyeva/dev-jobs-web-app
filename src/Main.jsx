import { React, createContext, useState } from "react";
import HomePage from "./HomePage";
import JobDetails from "./JobDetails";
import { Routes, Route } from "react-router-dom";
export const ThemeContext = createContext(null);

function Main() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider>
      <Routes>
        <Route
          path=""
          element={<HomePage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="/vacancy/:id" element={<JobDetails />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default Main;
