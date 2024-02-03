import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {  
    colors: {
      dark: "#3d3b40",
      light: "#efecec",
      orange: "#fc6736",
      blue: "#0c2d57",
      lightblue: "#0A3DA0"
    }
  },
  plugins: []
};

export default config;