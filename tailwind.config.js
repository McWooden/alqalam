/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {},
  colors: {
    primary: '#95b830',
    secondary: '#kd4c14',
    light: '#f2f2f2',
    dark: '#262626',
  }
};
export const daisyui = {
  themes: ['retro']
};
export const plugins = [require("daisyui")];