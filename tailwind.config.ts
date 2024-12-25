import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        wave: 'wave 1s linear infinite'
      },
      keyframes:{
        wave:{
          '0%': {transform: 'rotate(0.0deg)'},
          '10%': {transform: 'rotate(14deg)'},
          '20%': {transform: 'rotate(-8deg)'},
          '30%': {transform: 'rotate(14deg)'},
          '40%': {transform: 'rotate(-4deg)'},
          '50%': {transform: 'rotate(10.0deg)'},
          '60%': {transform: 'rotate(0.0deg)'},
          '100%': {transform: 'rotate(0.0deg)'},
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
} satisfies Config;
