import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {  
    colors: {
      black: "#3d3b40",
      white: "#efecec",
      orange: "#fc6736",
      blue: "#0a3da0"
    }
  },
  plugins: []
};

export default config;