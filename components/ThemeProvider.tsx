"use client";
import React, { createContext, useContext } from "react";

type Theme = {
  color: {
    primary: string;
    secondary: string;
    call: () => string;
  };
};

const defaultTheme: Theme = {
  color: {
    primary: "red",
    secondary: "blue",
    call: () => "hello",
  },
};
const ThemeContext = createContext<Theme>(defaultTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => useContext(ThemeContext);

export default ThemeProvider;
