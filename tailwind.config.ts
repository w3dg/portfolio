import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        playAround: "playAround 5s linear infinite",
      },
      keyframes: {
        playAround: {
          "0%, 100%": { transform: "translate(0px,0px)" },

          "25%": { transform: "translate(30px,30px)" },
          "50%": { transform: "translate(20px,10px)" },
          "75%": { transform: "translate(-30px,30px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
