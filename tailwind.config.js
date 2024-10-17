/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          exclusive: "#fea55f", // Custom yellow color
        },
        black: {
          DEFAULT: "#000",
          100: "#010C15", // background color
          200: "#011627", // template color
          300: "#071511", // github outer color
          400: "#0D2031", // button hover color
          500: "#001221", // projects tab color
          600: "#011221", // input text field color
        },
        gray: {
          custom: "#607B96",
          custom2: "#42D9AC", // github inner color
          custom3: "#1c2b3a", // projects button color
        },
        white: {
          custom: "#e5e9f0", // name color
        },
        blue: {
          custom: "#4d5bce", // typewriter color
        },
        green: {
          custom: "#43d9ad", //github link text
        },
        red: {
          custom: "#e99287", //github link
        },
        white: {
          custom: "#ffffff", //active link
          custom2: "#1e2d3d", // button background
        },
      },
      fontFamily: {
        "fira-code": ['"Fira Code"', "monospace"], // fira code
      },
      borderColor: {
        white: "#1e2d3d",
      },
      boxShadow: {
        custom: "inset 0 0 10px #00000071",
      },
      backgroundColor: {
        "custom-dark": "rgba(1, 22, 39, 0.84)",
      },
    },
  },
  plugins: [],
};
