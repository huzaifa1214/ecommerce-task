import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "300px", max: "639px" },
      },
      colors: {
        primary: "#1B4B66",
        veryLightGray: "#DEDEDEB3",
        lightGray: "#F1F1F1",
        darkGray: "#626262",
        veryDarkGray: "#B6B6B6",
        darkishGray: "#C4C4C4FF",
      },
      height: {
        "98": "25rem",
        "128": "30rem",
        "70": "17rem",
      },
      width: {
        "70": "17rem",
      },
      fontSize: {
        "2.5xl": "28px",
        "3.5xl": "34px",
      },
    },
  },
  plugins: [],
};
export default config;
