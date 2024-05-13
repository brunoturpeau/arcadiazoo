import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#5C8B3B",
      "primary-alt": "#86BA0D",
      "primary-hover": "#B5B61A",
      "primary-dark": "#474314",
      yellow: "#EEC91A",
      "yellow-alt": "#DDC74A",
      dark: "#57503E",
      light: "#EFE6C5",
      braun: "#A07C54",
      "braun-alt": "#8A7146",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
