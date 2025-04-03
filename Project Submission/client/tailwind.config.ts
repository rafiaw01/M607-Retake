import colors from "tailwindcss/colors";
import { createThemes } from "tw-colors"; // The import helps in having a color spectrum to Identify uses in the code 
import type { Config } from "tailwindcss";  // Importing tailwindcss package to assist 



const baseColors = [  
  "red",
  "gray",
  "blue",
  "green",
  "yellow",
  "purple",
  "indigo",
  "pink",
];

// This feature is to have a contrast with light mode and dark mode settings on a Dashboard 
const shadeMapping = {
  "100": "800",
  "50": "900",
  "300": "600",
  "200": "700",
  "400": "500",
  "600": "300",
  "500": "400",
  "700": "200",
  "900": "50",
  "800": "100",
};

const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {};
  baseColors.forEach((color) => {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key;  // Helps in Darkmode setting 
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
};

const lightTheme = generateThemeObject(colors, shadeMapping);   // Used to create various background theme object
const darkTheme = generateThemeObject(colors, shadeMapping, true);

const themes = {
  light: {
    ...lightTheme,
    white: "#ffffff",
  },
  dark: {
    ...darkTheme,
    white: colors.gray["900"],
    black: colors.gray["50"],
  },
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};

export default config;