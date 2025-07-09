/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // All HTML files in root
    "./**/*.html",        // All HTML files in subfolders
    "./*.js",             // Any vanilla JS files
    "./**/*.js"           // JS in subfolders too
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#f5f3ff',
          500: '#7c3aed',
          600: '#7c3aed',
          700: '#6d28d9',
          900: '#581c87'
        }
      }
    },
  },
  plugins: [],
};
