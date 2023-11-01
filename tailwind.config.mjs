import colors from "tailwindcss/colors";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.stone,
      },
    },
  },
  plugins: [],
};

export default config;
