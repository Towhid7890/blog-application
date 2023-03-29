/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#060047",
            secondary: "#E21818",
            accent: "#ffffff",
            info: "#FFDD83",
            warning: "#98DFD6",
         },
      },
   },
   plugins: [],
};
